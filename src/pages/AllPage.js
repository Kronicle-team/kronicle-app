import React, {useEffect, useState} from "react";
import style from "./AllPage.module.css";
import ProductCardHome from "../components/ProductCardHome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const AllPage = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Product Card 1",
            img: "",
            price: "VND"
        },
        {
            id: 2,
            name: "Product Card 2",
            img: "",
            price: "VND"
        },
        {
            id: 3,
            name: "Product Card 3",
            img: "",
            price: "VND"
        },
        {
            id: 4,
            name: "Product Card 4",
            img: "",
            price: "VND"
        },
        {
            id: 5,
            name: "Product Card 5",
            img: "",
            price: "VND"
        },
        {
            id: 6,
            name: "Product Card 6",
            img: "",
            price: "VND"
        },
        {
            id: 7,
            name: "Product Card 7",
            img: "",
            price: "VND"
        },
        {
            id: 8,
            name: "Product Card 8",
            img: "",
            price: "VND"
        },
        {
            id: 9,
            name: "Product Card 9",
            img: "",
            price: "VND"
        },
        {
            id: 10,
            name: "Product Card 10",
            img: "",
            price: "VND"
        },
        {
            id: 11,
            name: "Product Card 11",
            img: "",
            price: "VND"
        },
        {
            id: 12,
            name: "Product Card 12",
            img: "",
            price: "VND"
        },
        {
            id: 13,
            name: "Product Card 13",
            img: "",
            price: "VND"
        },
        {
            id: 14,
            name: "Product Card 14",
            img: "",
            price: "VND"
        },
        {
            id: 15,
            name: "Product Card 15",
            img: "",
            price: "VND"
        },
        {
            id: 16,
            name: "Product Card 16",
            img: "",
            price: "VND"
        },
    ])

    let maxItemsPerPage = 12
    const [page, setPage ] = useState(0)
    const [pageArray, setPageArray] = useState([]);
    let totalPage = Math.ceil(data.length / maxItemsPerPage)
    for (let i = 0; i < totalPage; i++) {
    }
    useEffect(() => {
        let prevPage = page - 1 < 0 ? null : page -1
        let nextPage = (page + 1) > totalPage - 1 ? null : page +1
        setPageArray([prevPage, page, nextPage])
    },[page, totalPage])

    return (
        <Layout header footer>
        <div className={style.cardWrapper}>
            {
                data.slice(page * maxItemsPerPage,(maxItemsPerPage * (page+1))).map((card) => {
                    return (
                        <div className={style.cardSingleWrapper}>
                        <ProductCardHome key={card.id} img={card.img} name={card.name} price={card.price}/>
                        </div>
                    )
                })}
        </div>
        <div className={style.btnWrapper}>
            <button onClick={() => {
                if (page !== 0) {
                    setPage((page - 1) % totalPage)
                } else {
                    setPage(totalPage - 1)
                }
                console.log(page)}
            }  className={style.prevPageBtn} disabled={page===0}><FontAwesomeIcon icon={faChevronLeft}/></button>
            <div className={style.pagination}>
                {
                    pageArray.map((pageNum) => {
                        if (pageNum !== null && pageNum !== page) {
                            return (
                                <button className={style.paginationBtn} onClick={()=> {
                                    setPage(pageNum)
                                    console.log(page)
                                }}>
                                    {pageNum + 1}
                                </button>
                            )
                        } else if (pageNum === page) {
                            return (
                                <button className={style.paginationBtn} disabled={true}>
                                    {pageNum + 1}
                                </button>
                            )
                        } else return null
                    })
                }
            </div>
            <button onClick={() => {setPage((page + 1) % totalPage)}
            }  className={style.nextPageBtn}><FontAwesomeIcon icon={faChevronRight} disabled={page === totalPage - 1}/></button>
        </div>
        </Layout>
    )
}

export default AllPage