import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { whichPage } from '../../store/action/action';
import api from '../../services/api';
import "./styles.css"

function Main() {

  const [products, setProducts] = useState([]);
  const [productInfo, setProductInfo] = useState({});
  const [page, setpage] = useState(1);
  console.log("Atual", page)
  
  const pageRedux = useSelector(state => state.page);
  console.log("Page Redux", pageRedux);

  const dispatch = useDispatch();

    useEffect(() => {
      loadProducts()
      // eslint-disable-next-line
    },[])

    const loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        const { docs, ...productInfo } = response.data;
 
        setProductInfo(productInfo);
        setpage(page)
        setProducts(docs, productInfo, page);

        dispatch(whichPage(page))
    };

    const prevPage = ()  => {
        if (page === 1) return;    
        const pageNumber = page - 1;
        loadProducts(pageNumber);
    }

    const nextPage = ()  => {
        if (page === productInfo.pages) return;
        const pageNumber = page + 1;   
        loadProducts(pageNumber);
    }
    

        return (
            <div className="product-list">
              {products.map(product =>(
                <article key={product._id}>
                  <strong>{product.title}</strong>
                  <p>{product.description}</p>
      
                  <p>URL: <a href={product.url}>{product.url}</a></p>
      
                  
                </article>
              ))}
              <div className="actions">
                <button disabled={page === 1} onClick={prevPage}>Anterior</button>
                <button disabled={page === productInfo.pages} onClick={nextPage}>Próximo</button>
              </div>
            </div>
        );
    }

   
export default Main
    
    
