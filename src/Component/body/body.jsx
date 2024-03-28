"use client";
import { IconArrowLeft, IconArrowRight, IconCheck, IconChevronDown, IconChevronLeft, IconChevronRight, IconChevronsDown, IconDirection, IconHeart } from '@tabler/icons-react';
import '../../Styles/body.css'
import { useState } from "react";


const Body = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const toggleVisibility = () => {
        console.log('Toggling visibility');
        setIsVisible(!isVisible);
    };


    const toggleBox = () => {
        setIsBoxVisible(!isBoxVisible);
    };



    return (
        <>

            <div className='main-body'>
                <div className='body-content'>

                    <div className='body-content-head'>
                        <hr className='line-hr' />
                        <div className='filter-recomended-div'>

                            <div className='filter-recomended'>

                                <div className='filter-div'>
                                    <p>3425 ITEMS</p>

                                    {
                                        isVisible ? (
                                            <div className='showfilter' onClick={toggleVisibility} > <IconChevronLeft /> <a>HIDE FILTER</a></div>
                                        ) :

                                            (
                                                <div className='showfilter' onClick={toggleVisibility} > <IconChevronRight /> <a>SHOW FILTER</a></div>
                                            )
                                    }

                                    <div className='filter-mobile'> <a>FILTER</a></div>


                                </div>

                                <div className='vertical-line-filter-recommended'>

                                </div>

                                <div className='recommended-p-div'><p className='recommended-p' onClick={toggleBox}>RECOMMENDED</p> <IconChevronDown /></div>

                            </div>
                        </div>
                        <hr className='line-hr' />
                    </div>

                    <div className={`body-sidebar ${isVisible ? 'visible' : 'hidden'}`}>


                        <div className='sidebar-content'>


                            <div className='sidebar-row-checkbox'>
                                <input type="checkbox" id="myCheckbox" />
                                <label for="myCheckbox">CUSTOMIZBLE</label>
                            </div>



                            <div className='sidebar-row'>
                                <div className='heading-sidebar'>
                                    <p>IDEAL FOR</p>
                                    <IconChevronDown />
                                </div>
                                <div>
                                    <p>All</p>
                                </div>

                            </div>

                            <div className='sidebar-row'>
                                <div className='heading-sidebar'>
                                    <p>OCCATION</p>
                                    <IconChevronDown />
                                </div>
                                <div>
                                    <p>All</p>
                                </div>

                            </div>

                            <div className='sidebar-row'>
                                <div className='heading-sidebar'>
                                    <p>WORK</p>
                                    <IconChevronDown />
                                </div>
                                <div>
                                    <p>All</p>
                                </div>

                            </div>

                            <div className='sidebar-row'>
                                <div className='heading-sidebar'>
                                    <p>FABRIC</p>
                                    <IconChevronDown />
                                </div>
                                <div>
                                    <p>All</p>
                                </div>

                            </div>

                            <div className='sidebar-row'>
                                <div className='heading-sidebar'>
                                    <p>SEGMENT</p>
                                    <IconChevronDown />
                                </div>
                                <div>
                                    <p>All</p>
                                </div>

                            </div>

                            <div className='sidebar-row'>
                                <div className='heading-sidebar'>
                                    <p>SUITABLE FOR</p>
                                    <IconChevronDown />
                                </div>
                                <div>
                                    <p>All</p>
                                </div>

                            </div>

                            <div className='sidebar-row'>
                                <div className='heading-sidebar'>
                                    <p>RAW MATERIALS</p>
                                    <IconChevronDown />
                                </div>
                                <div>
                                    <p>All</p>
                                </div>

                            </div>


                            <div className='sidebar-row'>
                                <div className='heading-sidebar'>
                                    <p>PATTERN</p>
                                    <IconChevronDown />
                                </div>
                                <div>
                                    <p>All</p>
                                </div>

                            </div>



                        </div>



                    </div>

                    <div className={`${isVisible ? 'main-body-contents' : 'hidefilter-main-body-contents'}`}>

                        {
                            isBoxVisible &&
                            <div className={`${isVisible ? 'box' : 'box-change'}`}>
                                <div className='recommended-box'> <IconCheck /> <p>RECOMMENDED</p></div>
                                <p>NEWEST FIRST</p>
                                <p>POPULAR</p>
                                <p>PRICE : HIGH TO LOW</p>
                                <p>PRICE : LOW TO HIGH</p>
                            </div>}


                        <div className='product-list-div'>

                            <div className='product'>
                                <div className='product-image'>
                                    <img src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </div>

                                <div className='product-bottom'>
                                    <div className='product-details'>
                                        <p className='product-name'>PPXOC MILKEYWAY DRESS IN..</p>
                                        <p className='product-description'><a>Sign in</a> or Create an account to see pricing</p>
                                    </div>
                                    <div className='Icon'>
                                        <IconHeart />
                                    </div>
                                </div>
                            </div>


                            <div className='product'>
                                <div className='product-image'>
                                    <img src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </div>

                                <div className='product-bottom'>
                                    <div className='product-details'>
                                        <p className='product-name'>PPXOC MILKEYWAY DRESS IN..</p>
                                        <p className='product-description'><a>Sign in</a> or Create an account to see pricing</p>
                                    </div>
                                    <div className='Icon'>
                                        <IconHeart />
                                    </div>
                                </div>
                            </div>



                            <div className='product'>
                                <div className='product-image'>
                                    <img src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </div>

                                <div className='product-bottom'>
                                    <div className='product-details'>
                                        <p className='product-name'>PPXOC MILKEYWAY DRESS IN..</p>
                                        <p className='product-description'><a>Sign in</a> or Create an account to see pricing</p>
                                    </div>
                                    <div className='Icon'>
                                        <IconHeart />
                                    </div>
                                </div>
                            </div>



                            <div className='product'>
                                <div className='product-image'>
                                    <img src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </div>

                                <div className='product-bottom'>
                                    <div className='product-details'>
                                        <p className='product-name'>PPXOC MILKEYWAY DRESS IN..</p>
                                        <p className='product-description'><a>Sign in</a> or Create an account to see pricing</p>
                                    </div>
                                    <div className='Icon'>
                                        <IconHeart />
                                    </div>
                                </div>
                            </div>



                            <div className='product'>
                                <div className='product-image'>
                                    <img src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </div>

                                <div className='product-bottom'>
                                    <div className='product-details'>
                                        <p className='product-name'>PPXOC MILKEYWAY DRESS IN..</p>
                                        <p className='product-description'><a>Sign in</a> or Create an account to see pricing</p>
                                    </div>
                                    <div className='Icon'>
                                        <IconHeart />
                                    </div>
                                </div>
                            </div>

                        </div>









                    </div>






                </div>
            </div>

        </>
    )
}

export default Body