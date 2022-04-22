import React, {useEffect, useState} from "react";
import Layout from "./Layout";
import style from "./AllPageTemplate.module.css";
import ProductCardHome from "./ProductCardHome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const AllPageTemplate = ({fetchedData, title}) => {
    const [data, setData] = useState(fetchedData)
    console.log(fetchedData)

    let maxItemsPerPage = 12
    const [page, setPage ] = useState(0)
    const [pageArray, setPageArray] = useState([]);
    let totalPage = Math.ceil(data.length / maxItemsPerPage)
    let lastPage = totalPage - 1
    for (let i = 0; i < totalPage; i++) {
    }
    useEffect(() => {
        let prevPage = page - 1 < 0 ? null : page -1
        let nextPage = (page + 1) > totalPage - 1 ? null : page +1
        setPageArray([prevPage, page, nextPage])
    },[page, totalPage])

    useEffect(() => {
        if (fetchedData !== []) {
            setData(fetchedData)
        }
    }, [fetchedData])

    return (
        <Layout header footer>
            <h1 className={style.title}>{title}</h1>
            <div className={style.cardWrapper}>
                {
                    data.slice(page * maxItemsPerPage,(maxItemsPerPage * (page+1))).map((card) => {
                        console.log(card.id)
                        return (
                            <div className={style.cardSingleWrapper}>
                                <ProductCardHome id={card.id} key={card.id} img={card.product_image} name={card.product_name} price={card.price} product_pricing={card.product_pricing}/>
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
                }
                }  className={style.prevPageBtn} disabled={page===0}><FontAwesomeIcon icon={faChevronLeft}/></button>
                <div className={style.pagination}>
                    {
                        pageArray.map((pageNum) => {
                            if (pageNum !== null && pageNum !== page) {
                                return (
                                    <button key={pageNum} className={style.paginationBtn} onClick={()=> {
                                        setPage(pageNum)
                                    }}>
                                        {pageNum + 1}
                                    </button>
                                )
                            } else if (pageNum === page) {
                                return (
                                    <button key={pageNum} className={style.paginationBtn} disabled={true}>
                                        {pageNum + 1}
                                    </button>
                                )
                            } else return null
                        })
                    }
                </div>
                <button onClick={() => {setPage((page + 1) % totalPage)}
                }  className={style.nextPageBtn} disabled={page === lastPage}><FontAwesomeIcon icon={faChevronRight}/></button>
            </div>
        </Layout>
    )
}

export default AllPageTemplate