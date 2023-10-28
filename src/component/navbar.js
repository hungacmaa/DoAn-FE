import {Link, Outlet, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import Swal from "sweetalert2";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleInputChangeNameProduct = (e) => {
        // dispatch(setFilterNameProduct(e.target.value));
    };

    const signin = () => {
        navigate("/signin")
    }
    return (
        <>
            <div className="border-bottom ">
                <div className="py-5">
                    <div className="container">
                        <div className="row w-100 align-items-center gx-lg-2 gx-0">
                            <div className="col-xxl-2 col-lg-3">
                                <Link to={"/index"}>
                                    <span className="navbar-brand d-none d-lg-block" href="">
                                        <img
                                            src="/assets/images/logo/freshcart-logo.svg"
                                            alt="eCommerce HTML Template"
                                        />
                                    </span>
                                </Link>
                                <div className="d-flex justify-content-between w-100 d-lg-none">
                                    <span className="navbar-brand" href="index.html">
                                        <img
                                            src="/assets/images/logo/freshcart-logo.svg"
                                            alt="eCommerce HTML Template"
                                        />
                                    </span>
                                    <div className="d-flex align-items-center lh-1">
                                        <div className="list-inline me-4">
                                            <div className="list-inline-item">
                                                <span
                                                    href="#!"
                                                    className="text-muted"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#userModal"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-user"
                                                    >
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                        <circle cx={12} cy={7} r={4}/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        {/* Button */}
                                        <button
                                            className="navbar-toggler collapsed"
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#navbar-default"
                                            aria-controls="navbar-default"
                                            aria-label="Toggle navigation"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={32}
                                                height={32}
                                                fill="currentColor"
                                                className="bi bi-text-indent-left text-primary"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                                            </svg>
                                        </button>


                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-lg-5 d-none d-lg-block">
                                <form action="#">
                                    <div className="input-group ">
                                        <input
                                            className="form-control rounded"
                                            type="search"
                                            placeholder="Search for Product"
                                            onChange={handleInputChangeNameProduct}
                                        />
                                        <span className="input-group-append">
                  <button
                      className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end"
                      type="button"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-search"
                    >
                      <circle cx={11} cy={11} r={8}/>
                      <line x1={21} y1={21} x2="16.65" y2="16.65"/>
                    </svg>
                  </button>
                </span>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-2 col-xxl-3 d-none d-lg-block"></div>
                            <div className="col-md-2 col-xxl-2 text-end d-none d-lg-block">
                                <div className="list-inline">
                                    <div className="list-inline-item">
                                        <Link to={"/customer/notification"}>
                                            <a
                                                className="text-muted position-relative"
                                                href=""
                                                role="button"
                                            >
                                                <svg fill="#777777" width="18px" height="18px" viewBox="0 0 16 16" id="bell-16px" xmlns="http://www.w3.org/2000/svg">
                                                    <path id="Path_164" data-name="Path 164" d="M42.2,10.7l-1.53-1.02A1.5,1.5,0,0,1,40,8.43V6a5,5,0,0,0-3.109-4.623,1.987,1.987,0,0,0-3.782,0A5,5,0,0,0,30,6V8.43a1.5,1.5,0,0,1-.668,1.248L27.8,10.7a1.8,1.8,0,0,0,1,3.3H33a2,2,0,0,0,4,0h4.2a1.8,1.8,0,0,0,1-3.3Zm-1,2.3H28.8a.8.8,0,0,1-.444-1.47l1.531-1.02A2.5,2.5,0,0,0,31,8.43V6a4,4,0,0,1,8,0V8.43a2.5,2.5,0,0,0,1.113,2.08l1.532,1.021A.8.8,0,0,1,41.2,13ZM35,15a1,1,0,0,1-1-1h2A1,1,0,0,1,35,15Zm.5-11.5A.5.5,0,0,1,35,4a2,2,0,0,0-2,2,.5.5,0,0,1-1,0,3,3,0,0,1,3-3A.5.5,0,0,1,35.5,3.5Z" transform="translate(-27)"/>
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                    &nbsp;

                                    <div className="list-inline-item me-5">
                                        <span
                                            href="#!"
                                            className="text-muted"
                                            data-bs-toggle="modal"
                                            data-bs-target="#userModal"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={20}
                                                height={20}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-user"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                <circle cx={12} cy={7} r={4}/>
                                            </svg>
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav
                    className="navbar navbar-expand-lg navbar-light navbar-default py-0 pb-lg-4 "
                    aria-label="Offcanvas navbar large"
                >
                    <div className="container">
                        <div
                            className="offcanvas offcanvas-start"
                            tabIndex={-1}
                            id="navbar-default"
                            aria-labelledby="navbar-defaultLabel"
                        >
                            <div className="offcanvas-header pb-1">
                                <span href="index.html">
                                    <img
                                        src="/assets/images/logo/freshcart-logo.svg"
                                        alt="eCommerce HTML Template"
                                    />
                                </span>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="offcanvas-body">
                                <div className="d-block d-lg-none mb-4">
                                    <form action="#">
                                        <div className="input-group ">
                                            <input
                                                className="form-control rounded"
                                                type="search"
                                                placeholder="Search for Product"
                                            />
                                            <span className="input-group-append">
                    <button
                        className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end"
                        type="button"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-search"
                      >
                        <circle cx={11} cy={11} r={8}/>
                        <line x1={21} y1={21} x2="16.65" y2="16.65"/>
                      </svg>
                    </button>

                  </span>
                                        </div>
                                    </form>
                                    <div className="mt-2">
                                        <button
                                            type="button"
                                            className="btn  btn-outline-gray-400 text-muted w-100 "
                                            data-bs-toggle="modal"
                                            data-bs-target="#locationModal"
                                        >
                                            <i className="feather-icon icon-map-pin me-2"/>
                                            Pick Location
                                        </button>
                                    </div>
                                </div>
                                <div className="d-block d-lg-none mb-4">
                                    <span
                                        className="btn btn-primary w-100 d-flex justify-content-center align-items-center"
                                        data-bs-toggle="collapse"
                                        href="#collapseExample"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample"
                                    >
                <span className="me-2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-grid"
                  >
                    <rect x={3} y={3} width={7} height={7}/>
                    <rect x={14} y={3} width={7} height={7}/>
                    <rect x={14} y={14} width={7} height={7}/>
                    <rect x={3} y={14} width={7} height={7}/>
                  </svg>
                </span>{" "}
                                        All Categories
                                    </span>
                                    <div className="collapse mt-2" id="collapseExample">
                                        <div className="card card-body">
                                            <ul className="mb-0 list-unstyled">
                                                <li>
                                                    <Link to={"/product/filter"}>
                                                        <span className="dropdown-item" href="">
                                                            Dairy, Bread &amp; Eggs
                                                        </span>
                                                    </Link>

                                                </li>
                                                <li>
                                                    <Link to={"/product/filter"}>
                                                        <span className="dropdown-item" href="">
                                                            Snacks &amp; Munchies
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/product/filter"}>
                                                        <span className="dropdown-item" href="">
                                                            Fruits &amp; Vegetables
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/product/filter"}>
                                                        <span className="dropdown-item" href="">
                                                            Cold Drinks &amp; Juices
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/product/filter"}>
                                                        <span className="dropdown-item" href="">
                                                            Breakfast &amp; Instant Food
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/product/filter"}>
                                                        <span className="dropdown-item" href="">
                                                            Bakery &amp; Biscuits
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/product/filter"}>
                                                        <span className="dropdown-item" href="">
                                                            Chicken, Meat &amp; Fish
                                                        </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown me-3 d-none d-lg-block">
                                    <button
                                        className="btn btn-primary px-6 "
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                <span className="me-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-grid"
                  >
                    <rect x={3} y={3} width={7} height={7}/>
                    <rect x={14} y={3} width={7} height={7}/>
                    <rect x={14} y={14} width={7} height={7}/>
                    <rect x={3} y={14} width={7} height={7}/>
                  </svg>
                </span>{" "}
                                        All Categories
                                    </button>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton1"
                                    >
                                        <li>
                                            <Link to={"/product/filter"}>
                                                <span className="dropdown-item" href="">
                                                    Dairy, Bread &amp; Eggs
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/product/filter"}>
                                                <span className="dropdown-item" href="">
                                                    Snacks &amp; Munchies
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/product/filter"}>
                                                <span className="dropdown-item" href="">
                                                    Fruits &amp; Vegetables
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/product/filter"}>
                                                <span className="dropdown-item" href="">
                                                    Cold Drinks &amp; Juices
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/product/filter"}>
                                                <span className="dropdown-item" href="">
                                                    Breakfast &amp; Instant Food
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/product/filter"}>
                                                <span className="dropdown-item" href="">
                                                    Bakery &amp; Biscuits
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/product/filter"}>
                                                <span className="dropdown-item" href="">
                                                    Chicken, Meat &amp; Fish
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="">
                                    <ul className="navbar-nav align-items-center ">
                                        <li className="nav-item w-100 w-lg-auto">
                                            <Link to={"/index"}>
                                                <span className="nav-link" href="">
                                                    Home
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item w-100 w-lg-auto">
                                            <Link to={"/shop"}>
                                                <span className="nav-link" href="">
                                                    Vendor
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item w-100 w-lg-auto">
                                            <Link to={"/product/filter"}>
                                                <span className="nav-link" href="">
                                                    My Page
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item w-100 w-lg-auto">
                                            <Link to={"/about"}>
                                                <span className="nav-link" href="">
                                                    Manage
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Modal */}
            <div
                className="modal fade"
                id="userModal"
                tabIndex={-1}
                aria-labelledby="userModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
                                Sign Up
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <Formik
                                initialValues={{username: '', name: '', email: '', password: '', role: '2'}}
                                validate={values => {
                                    const errors = {};
                                    // Kiểm tra và xử lý lỗi cho các trường

                                    if (!values.name) {
                                        errors.name = 'Username is required';
                                    }


                                    if (!values.email) {
                                        errors.email = 'Email is required';
                                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                        errors.email = 'Invalid email address';
                                    }

                                    if (!values.password) {
                                        errors.password = 'Password is required';
                                    } else if (values.password.length < 6) {
                                        errors.password = 'Password must be at least 6 characters long';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, {setSubmitting}) => {
                                    const ACTIVE = "1";
                                    const SHOP_PENDING = "4";
                                    let status = ACTIVE;
                                    if (values.role != "2") {
                                        status = SHOP_PENDING;
                                    }
                                    let account = {
                                        name: values.name,
                                        email: values.email,
                                        password: values.password,
                                        username: values.username,
                                        role: {
                                            id: values.role
                                        },
                                        status: {
                                            id: status
                                        }
                                    }
                                    axios.post("http://localhost:8080/register", account).then((rep) => {
                                        Swal.fire(
                                            '',
                                            'Account successfully created',
                                            'success'
                                        )
                                        navigate("/signin")
                                    }).catch((err) => {
                                        console.log(err)
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text: 'Account creation failed!',
                                        })
                                    })


                                    setSubmitting(false);
                                }}
                            >
                                <Form>
                                    <div className="row g-3">
                                        <div className="col">
                                            <h6>Username:</h6>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                placeholder="Username"
                                                required=""
                                                name="username"
                                            />
                                            <ErrorMessage name="name" component="div" className="error-message"/>
                                        </div>
                                        <div className="col">
                                            <h6>Name:</h6>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                                required=""
                                                name="name"
                                            />
                                            <ErrorMessage name="name" component="div" className="error-message"/>
                                        </div>

                                        <div className="col-12">
                                            <h6>Email:</h6>
                                            <Field
                                                type="email"
                                                className="form-control"
                                                id="inputEmail4"
                                                placeholder="Email"
                                                required=""
                                                name="email"
                                            />
                                            <ErrorMessage name="email" component="div" className="error-message"/>
                                        </div>
                                        <div className="col-12">
                                            <div className="password-field position-relative">
                                                <h6>Password:</h6>
                                                <Field
                                                    type="password"
                                                    id="fakePassword"
                                                    placeholder="Enter Password"
                                                    className="form-control"
                                                    required=""
                                                    name="password"
                                                />
                                                <span>
          </span>
                                            </div>
                                            <ErrorMessage name="password" component="div"
                                                          className="error-message"/>
                                        </div>
                                        <h6>Role:</h6>
                                        <Field name="role"
                                               as="select"
                                               className="form-control"
                                        >
                                            <option value="" disabled></option>
                                            <option value="2">
                                                Customer
                                            </option>
                                            <option value="3">
                                                Shop
                                            </option>
                                            ))
                                        </Field>
                                        <ErrorMessage name="status" component="div"/>
                                        <div className="col-12 d-grid">
                                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"
                                            >
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                    <br/>
                                    <div>
                                        Already have an account? <span href="/signin">Sign In</span>
                                    </div>
                                    <ErrorMessage name="general" component="div" className="error-message"/>
                                </Form>
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
            {/* ShopSingleLogin Cart */}
            <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header border-bottom">
                    <div className="text-start">
                        <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
                            Shop Cart
                        </h5>
                        <small>Location in 382480</small>
                    </div>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body">
                    <div className="">
                        {/* alert */}
                        <div className="alert alert-danger p-2" role="alert">
                            You’ve got FREE delivery. Start{" "}
                            <span href="#!" className="alert-link">
                                checkout now!
                            </span>
                        </div>
                        <ul className="list-group list-group-flush">
                            {/* list group */}
                            <li className="list-group-item py-3 ps-0 border-top">
                                {/* row */}
                                <div className="row align-items-center">
                                    <div className="col-6 col-md-6 col-lg-7">
                                        <div className="d-flex">
                                            <img
                                                src="/assets/images/products/product-img-1.jpg"
                                                alt="Ecommerce"
                                                className="icon-shape icon-xxl"
                                            />
                                            <div className="ms-3">
                                                {/* title */}
                                                <span href="pages/shop-single.html" className="text-inherit">
                                                    <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                                                </span>
                                                <span>
                      <small className="text-muted">.98 / lb</small>
                    </span>
                                                {/* text */}
                                                <div className="mt-2 small lh-1">
                                                    <span
                                                        href="#!"
                                                        className="text-decoration-none text-inherit"
                                                    >
                                                        {" "}
                                                        <span className="me-1 align-text-bottom">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2 text-success"
                          >
                            <polyline points="3 6 5 6 21 6"/>
                            <path
                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1={10} y1={11} x2={10} y2={17}/>
                            <line x1={14} y1={11} x2={14} y2={17}/>
                          </svg>
                        </span>
                                                        <span className="text-muted">Remove</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* input group */}
                                    <div className="col-4 col-md-3 col-lg-3">
                                        {/* input */}
                                        {/* input */}
                                        <div className="input-group input-spinner  ">
                                            <input
                                                type="button"
                                                defaultValue="-"
                                                className="button-minus  btn  btn-sm "
                                                data-field="quantity"
                                            />
                                            <input
                                                type="number"
                                                step={1}
                                                max={10}
                                                defaultValue={1}
                                                name="quantity"
                                                className="quantity-field form-control-sm form-input   "
                                            />
                                            <input
                                                type="button"
                                                defaultValue="+"
                                                className="button-plus btn btn-sm "
                                                data-field="quantity"
                                            />
                                        </div>
                                    </div>
                                    {/* price */}
                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold">$5.00</span>
                                    </div>
                                </div>
                            </li>
                            {/* list group */}
                            <li className="list-group-item py-3 ps-0">
                                {/* row */}
                                <div className="row align-items-center">
                                    <div className="col-6 col-md-6 col-lg-7">
                                        <div className="d-flex">
                                            <img
                                                src="/assets/images/products/product-img-2.jpg"
                                                alt="Ecommerce"
                                                className="icon-shape icon-xxl"
                                            />
                                            <div className="ms-3">
                                                <span href="pages/shop-single.html" className="text-inherit">
                                                    <h6 className="mb-0">NutriChoice Digestive </h6>
                                                </span>
                                                <span>
                      <small className="text-muted">250g</small>
                    </span>
                                                {/* text */}
                                                <div className="mt-2 small lh-1">
                                                    <span
                                                        href="#!"
                                                        className="text-decoration-none text-inherit"
                                                    >
                                                        {" "}
                                                        <span className="me-1 align-text-bottom">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2 text-success"
                          >
                            <polyline points="3 6 5 6 21 6"/>
                            <path
                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1={10} y1={11} x2={10} y2={17}/>
                            <line x1={14} y1={11} x2={14} y2={17}/>
                          </svg>
                        </span>
                                                        <span className="text-muted">Remove</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* input group */}
                                    <div className="col-4 col-md-3 col-lg-3">
                                        {/* input */}
                                        {/* input */}
                                        <div className="input-group input-spinner  ">
                                            <input
                                                type="button"
                                                defaultValue="-"
                                                className="button-minus  btn  btn-sm "
                                                data-field="quantity"
                                            />
                                            <input
                                                type="number"
                                                step={1}
                                                max={10}
                                                defaultValue={1}
                                                name="quantity"
                                                className="quantity-field form-control-sm form-input   "
                                            />
                                            <input
                                                type="button"
                                                defaultValue="+"
                                                className="button-plus btn btn-sm "
                                                data-field="quantity"
                                            />
                                        </div>
                                    </div>
                                    {/* price */}
                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold text-danger">$20.00</span>
                                        <div className="text-decoration-line-through text-muted small">
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* list group */}
                            <li className="list-group-item py-3 ps-0">
                                {/* row */}
                                <div className="row align-items-center">
                                    <div className="col-6 col-md-6 col-lg-7">
                                        <div className="d-flex">
                                            <img
                                                src="/assets/images/products/product-img-3.jpg"
                                                alt="Ecommerce"
                                                className="icon-shape icon-xxl"
                                            />
                                            <div className="ms-3">
                                                {/* title */}
                                                <span href="pages/shop-single.html" className="text-inherit">
                                                    <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                                                </span>
                                                <span>
                      <small className="text-muted">1 kg</small>
                    </span>
                                                {/* text */}
                                                <div className="mt-2 small lh-1">
                                                    <span
                                                        href="#!"
                                                        className="text-decoration-none text-inherit"
                                                    >
                                                        {" "}
                                                        <span className="me-1 align-text-bottom">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2 text-success"
                          >
                            <polyline points="3 6 5 6 21 6"/>
                            <path
                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1={10} y1={11} x2={10} y2={17}/>
                            <line x1={14} y1={11} x2={14} y2={17}/>
                          </svg>
                        </span>
                                                        <span className="text-muted">Remove</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* input group */}
                                    <div className="col-4 col-md-3 col-lg-3">
                                        {/* input */}
                                        {/* input */}
                                        <div className="input-group input-spinner  ">
                                            <input
                                                type="button"
                                                defaultValue="-"
                                                className="button-minus  btn  btn-sm "
                                                data-field="quantity"
                                            />
                                            <input
                                                type="number"
                                                step={1}
                                                max={10}
                                                defaultValue={1}
                                                name="quantity"
                                                className="quantity-field form-control-sm form-input   "
                                            />
                                            <input
                                                type="button"
                                                defaultValue="+"
                                                className="button-plus btn btn-sm "
                                                data-field="quantity"
                                            />
                                        </div>
                                    </div>
                                    {/* price */}
                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold">$15.00</span>
                                        <div className="text-decoration-line-through text-muted small">
                                            $20.00
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* list group */}
                            <li className="list-group-item py-3 ps-0">
                                {/* row */}
                                <div className="row align-items-center">
                                    <div className="col-6 col-md-6 col-lg-7">
                                        <div className="d-flex">
                                            <img
                                                src="/assets/images/products/product-img-4.jpg"
                                                alt="Ecommerce"
                                                className="icon-shape icon-xxl"
                                            />
                                            <div className="ms-3">
                                                {/* title */}
                                                {/* title */}
                                                <span href="pages/shop-single.html" className="text-inherit">
                                                    <h6 className="mb-0">Onion Flavour Potato</h6>
                                                </span>
                                                <span>
                      <small className="text-muted">250g</small>
                    </span>
                                                {/* text */}
                                                <div className="mt-2 small lh-1">
                                                    <span
                                                        href="#!"
                                                        className="text-decoration-none text-inherit"
                                                    >
                                                        {" "}
                                                        <span className="me-1 align-text-bottom">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2 text-success"
                          >
                            <polyline points="3 6 5 6 21 6"/>
                            <path
                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1={10} y1={11} x2={10} y2={17}/>
                            <line x1={14} y1={11} x2={14} y2={17}/>
                          </svg>
                        </span>
                                                        <span className="text-muted">Remove</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* input group */}
                                    <div className="col-4 col-md-3 col-lg-3">
                                        {/* input */}
                                        {/* input */}
                                        <div className="input-group input-spinner  ">
                                            <input
                                                type="button"
                                                defaultValue="-"
                                                className="button-minus  btn  btn-sm "
                                                data-field="quantity"
                                            />
                                            <input
                                                type="number"
                                                step={1}
                                                max={10}
                                                defaultValue={1}
                                                name="quantity"
                                                className="quantity-field form-control-sm form-input   "
                                            />
                                            <input
                                                type="button"
                                                defaultValue="+"
                                                className="button-plus btn btn-sm "
                                                data-field="quantity"
                                            />
                                        </div>
                                    </div>
                                    {/* price */}
                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold">$15.00</span>
                                        <div className="text-decoration-line-through text-muted small">
                                            $20.00
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* list group */}
                            <li className="list-group-item py-3 ps-0 border-bottom">
                                {/* row */}
                                <div className="row align-items-center">
                                    <div className="col-6 col-md-6 col-lg-7">
                                        <div className="d-flex">
                                            <img
                                                src="/assets/images/products/product-img-5.jpg"
                                                alt="Ecommerce"
                                                className="icon-shape icon-xxl"
                                            />
                                            <div className="ms-3">
                                                {/* title */}
                                                <span href="pages/shop-single.html" className="text-inherit">
                                                    <h6 className="mb-0">Salted Instant Popcorn </h6>
                                                </span>
                                                <span>
                      <small className="text-muted">100g</small>
                    </span>
                                                {/* text */}
                                                <div className="mt-2 small lh-1">
                                                    <span
                                                        href="#!"
                                                        className="text-decoration-none text-inherit"
                                                    >
                                                        {" "}
                                                        <span className="me-1 align-text-bottom">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-trash-2 text-success"
                          >
                            <polyline points="3 6 5 6 21 6"/>
                            <path
                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1={10} y1={11} x2={10} y2={17}/>
                            <line x1={14} y1={11} x2={14} y2={17}/>
                          </svg>
                        </span>
                                                        <span className="text-muted">Remove</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* input group */}
                                    <div className="col-4 col-md-3 col-lg-3">
                                        {/* input */}
                                        {/* input */}
                                        <div className="input-group input-spinner  ">
                                            <input
                                                type="button"
                                                defaultValue="-"
                                                className="button-minus  btn  btn-sm "
                                                data-field="quantity"
                                            />
                                            <input
                                                type="number"
                                                step={1}
                                                max={10}
                                                defaultValue={1}
                                                name="quantity"
                                                className="quantity-field form-control-sm form-input   "
                                            />
                                            <input
                                                type="button"
                                                defaultValue="+"
                                                className="button-plus btn btn-sm "
                                                data-field="quantity"
                                            />
                                        </div>
                                    </div>
                                    {/* price */}
                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold">$15.00</span>
                                        <div className="text-decoration-line-through text-muted small">
                                            $25.00
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/* btn */}
                        <div className="d-flex justify-content-between mt-4">
                            <span href="#!" className="btn btn-primary">
                                Continue Shopping
                            </span>
                            <span href="#!" className="btn btn-dark">
                                Update Cart
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Navbar;