import Layout from "../../components/Layout";
import style from "./CartPage.module.css";
import CartCard from "../../components/cart/CartCard";
import { useEffect, useRef, useState } from "react";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { Link, useNavigate } from "react-router-dom";

const coupons = [
  {
    id: 0,
    name: "kronicle",
    value: 0.1,
  },
  {
    id: 1,
    name: "kronicle1",
    value: 0.2,
  },
];

const CartPage =  () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [bidBtn, setBidBtn] = useState(
    localStorage.getItem("bidBtn") === "true" &&
      localStorage.getItem("bidBtn") !== undefined
  );
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(subTotal);
  const [shippingFee, setShippingFee] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [couponValue, setCouponValue] = useState(0);
  const [currentCart, setCurrentCart] = useState({});
  const [currentCartKeys, setCurrentCartKeys] = useState([]);
  const [temp, setTemp] = useState([]);
  const couponInput = useRef();

  const fetchData = (documentID) => {
    onSnapshot(
      doc(db, "users", documentID),
      (docSnapshot) => {
        const newCart = {};
        const newCartKeys = [];
        Object.entries(docSnapshot.data().cart).map((item) => {
          newCart[item[0]] = item[1];
          newCartKeys.push(item[0]);
        });
        setCurrentCart(newCart);
        setCurrentCartKeys(newCartKeys);
      },
      (error) => console.log(error)
    );

    const q2 = query(
      collection(db, "listing"),
      where("product_pricing", "==", "bid now"),
    );
    onSnapshot(
      q2,
      (querySnapshot) => {
        const bidCards = [];
        querySnapshot.forEach((doc) => {
          if (currentCartKeys.includes(doc.id))
            bidCards.push({ ...doc.data(), id: doc.id });
        });
        if (bidBtn === true) {
          setTemp(bidCards);
        }
      },
      (error) => console.log(error)
    );

    const q3 = query(
      collection(db, "listing"),
      where("product_pricing", "==", "buy now"),
      where("availability", "==", "available")
    );
    onSnapshot(
      q3,
      (querySnapshot) => {
        const buyNowCards = [];
        querySnapshot.forEach((doc) => {
          if (currentCartKeys.includes(doc.id))
            buyNowCards.push({ ...doc.data(), id: doc.id });
        });
        if (bidBtn === false) {
          setTemp(buyNowCards);
        }
      },
      (error) => console.log(error)
    );
  };


  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoading(false)
        if (auth.currentUser) {
          let documentID = auth.currentUser.uid
          fetchData(documentID);
        } else setCurrentCart({})
        setSubTotal(0);
        temp.map((card) => {
          setSubTotal((prevState) => prevState + parseInt(card.price));
        });
        if (subTotal > 0) {
          setShippingFee(15000);
          setServiceFee(5000);
        }
        if (bidBtn) {
          setDeposit(Math.round(subTotal * 0.1));
          setTotal(
              subTotal * (1 - couponValue) + deposit + shippingFee + serviceFee
          );
        } else setTotal(subTotal * (1 - couponValue) + shippingFee);
        const isBid = bidBtn;
        localStorage.setItem("bidBtn", JSON.stringify(isBid));
      } else {
        navigate("/")
        alert("Please login to access your cart.")
      }
    });
    unsub()

    return () => unsub()
  }, [currentCart]);

  if (isLoading) {return <div/>}

  const handleOrder = () => {
    let checkout = []
    if (!bidBtn) temp.forEach((item) => {
      checkout.push(item.id)
    })
    if (bidBtn) temp.forEach((item) => {
      console.log("winning ?", item.price === currentCart[item.id])
      console.log("bid ends ?", item.date_time <= Date())
      console.log(item.date_time)
      if (item.price === currentCart[item.id] && new Date(item.date_time).getTime() >= new Date().getTime()) {
        checkout.push(item.id)
      }
    })
    if (checkout.length > 0)
      navigate("/check-out-1", { state: { id: checkout } });
    else alert("There are no items for checkout right now.")
  };

  return (
    <Layout header footer>
      <div className={style.container}>
        <h1>Cart</h1>
        <div className={style.bidOrBuyNowContainer}>
          <div>
            <button
              className={
                !bidBtn ? style.changeModeBtn : style.changeModeBtnSelected
              }
              disabled={bidBtn}
              onClick={() => {
                setBidBtn(true);
              }}
            >
              Bid
            </button>
          </div>
          <div>
            <button
              className={
                bidBtn ? style.changeModeBtn : style.changeModeBtnSelected
              }
              disabled={!bidBtn}
              onClick={() => {
                setBidBtn(false);
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className={style.contentContainer}>
          <div className={style.cartListing}>
            {temp.map((card) => {
              if (currentCart[card.id] !== undefined) {
                return (
                  <CartCard
                    date_time={card.date_time}
                    cart={currentCart}
                    key={card.id}
                    id={card.id}
                    image={card.product_image}
                    name={card.product_name}
                    price={currentCart[card.id]}
                    bid={card.product_pricing}
                    highestBid={card.price}
                    currentUser={auth.currentUser ? auth.currentUser.uid : ""}
                  />
                );
              }
            })}
          </div>
          <div className={style.cartSummary}>
            <div className={style.summaryTitle}>
              <h3>SUMMARY</h3>
            </div>
            <div className={style.summaryRow}>
              <div className={style.summaryField}>
                <div className={style.summaryFieldHeading}>Subtotal</div>
                <div className={style.summaryFieldValue}>
                  {subTotal.toLocaleString()}
                </div>
              </div>
              <div className={style.summaryField}>
                <div className={style.summaryFieldHeading}>
                  Shipping charges
                </div>
                <div className={style.summaryFieldValue}>
                  {shippingFee.toLocaleString()}
                </div>
              </div>
              {bidBtn ? (
                <div className={style.summaryField}>
                  <div className={style.summaryFieldHeading}>Deposit</div>
                  <div className={style.summaryFieldValue}>
                    {deposit.toLocaleString()}
                  </div>
                </div>
              ) : null}
              {bidBtn ? (
                <div className={style.summaryField}>
                  <div className={style.summaryFieldHeading}>Service Fee</div>
                  <div className={style.summaryFieldValue}>
                    {serviceFee.toLocaleString()}
                  </div>
                </div>
              ) : null}
            </div>
            <div className={style.summaryRow}>
              <div className={style.summaryField}>
                <div className={style.summaryFieldHeading}>Coupon</div>
                <div className={style.summaryFieldValueAsInput}>
                  <input
                    className={style.summaryFieldCouponInput}
                    type={"text"}
                    ref={couponInput}
                  />
                  <button
                    className={style.summaryFieldCouponBtn}
                    onClick={() => {
                      let count = 0;
                      coupons.map((coupon) => {
                        if (
                          coupon.name === couponInput.current.value &&
                          count === 0
                        ) {
                          setCouponValue(coupon.value);
                          count = 1;
                        }
                        if (
                          count === 0 &&
                          coupons.indexOf(coupon) === coupons.length - 1
                        ) {
                          setCouponValue(0);
                        }
                      });
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className={style.summaryTotal}>
              <h3
                className={
                  style.summaryFieldHeading + " " + style.summaryTotalHeading
                }
              >
                TOTAL
              </h3>
              <h3
                className={
                  style.summaryFieldValue + " " + style.summaryTotalValue
                }
              >
                {total.toLocaleString()}
              </h3>
            </div>
            <div className={style.cartBtnWrapper}>
              <Link to={"/"}>
                <button
                  className={style.cartBtn + " " + style.btnContinueShopping}
                >
                  CONTINUE SHOPPING
                </button>
              </Link>
                <button className={style.cartBtn + " " + style.btnPlaceOrder} onClick={() => handleOrder()}>
                  PLACE ORDER
                </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
