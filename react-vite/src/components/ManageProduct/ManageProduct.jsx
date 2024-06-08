import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductsByUserThunk } from '../../redux/product';
import { NavLink } from "react-router-dom";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import OpenFSModalButton from '../OpenFSModalButton/OpenFSModalButton'
import './ManageProduct.css'

const ManageProduct=()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currUser = useSelector(state=>state.session.user)

  const currPorductsObj = useSelector(state => state.products.myProducts)

  const currPorductsArr = Object.values(currPorductsObj)

  console.log("!!!!!!!!!!!!!!!!!!!!!currPorductsArr", currPorductsArr)
  const [productPosted, setProductPosted] = useState(false)



  useEffect(()=>{
    if(!currUser) navigate('/')

    dispatch(getProductsByUserThunk()).then(()=>{
      setProductPosted(false)
    })

  }, [dispatch,currUser,productPosted])

  return(
    <div className="products">
      {currPorductsArr.length > 0 ? (
      <div className="product-container">
        {currPorductsArr.map((product) => (
          <div key={product.id} className="product">
          <div className="product-img">
          <img src={product.images[0].image_url} alt={product.name} className="product-image" />
          </div>

          <div className="product-name">{product.name}</div>

          <div className="update-delete-container">
            <div className="delete">
            <OpenModalButton
            buttonText={"Delete"}
            className='delete-btn'
            modalComponent={<DeleteProduct product={product} setProductPosted={setProductPosted} />}
            />
            </div>
            <div className="update">
            <OpenFSModalButton
            buttonText={"Update"}
            className='update-btn'
            modalComponent={<UpdateProduct product={product} setProductPosted={setProductPosted} />}
            />
            </div>
          </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="no-product-container">
        <h3>no products yet, create your first product to start your business!!</h3>
        <div className="create-btn">
        <NavLink to='/products/new'className="create-link"> Create New Product </NavLink>
          </div>
      </div>
    )}
    </div>
  )



}



export default ManageProduct;
