
import { IconBrandInstagram, IconCamera } from "@tabler/icons-react"
import "../../Styles/footer.css"

const Footer = () => {

    return (

        <>
            <div className="footer">

                <div className="footer-content">

                    <div className="footer-top">

                        <div className="top-left-side">
                            <h3>BE THE FIRST TO KNOW</h3>
                            <p>Sign up for updates from mettā muse.</p>

                            <div className="input-button">
                                <input type="text" placeholder="Enter your e-mail..." />
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>

                        <hr  className="line-footer"/>

                        <div className="top-right-side">

                            <div className="right-side-content">

                                <div className="contact-us">
                                    <h3>CONTACT US</h3>
                                    <p>+44 221 133 5360</p>
                                    <p>customercare@mettamuse.com</p>
                                </div>

                                <hr  className="line-footer"/>

                                <div className="currency">

                                    <h3>CURRENCY</h3>
                                    <div className="usd-image-div">
                                        <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" />
                                        <h4>+ USD</h4>
                                    </div>

                                    <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                                </div>


                            </div>
                        </div>


                    </div>

                    <hr className="horizontal-line-footer" />

                    <div className="footer-bottom">

                        <div className="bottom-left">
                            <h3>mettā muse</h3>

                            <div className="bottom-left-contents">
                                <p>About Us</p>
                                <p>Stories</p>
                                <p>Artisans</p>
                                <p>Contact Us</p>
                                <p>EU Compliances Docs</p>
                            </div>
                        </div>

                        <hr  className="line-footer"/>


                        <div className="bottom-center">

                            <h3>QUICK LINKS</h3>

                            <div className="bottom-center-contents">
                                <p>Orders & Shipping</p>
                                <p>Join/Login as a Seller</p>
                                <p>Payment & Pricing</p>
                                <p>Return & Refunds</p>
                                <p>FAQs</p>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>

                        </div>

                        <hr  className="line-footer"/>

                        <div className="bottom-right">

                            <h3>FOLLOW US</h3>

                            <div className="social-media">
                                <div className="social">
                                    <IconCamera />
                                </div>
                                <div className="social">
                                    <IconBrandInstagram />
                                </div>

                            </div>

                            <div className="payment-div">
                                <h3>mettā muse Accepts</h3>

                                <div className="payment-methods">

                                    <img src="data:image/png;base64,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" alt="" />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37aohMft0dIR4o9GAWnTW5qoP-ilBEy91DnjCtJnrOA&s" alt="" />
                                    <img src="data:image/png;base64,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" alt="" />
                                    <img src="https://logos-world.net/wp-content/uploads/2022/03/Apple-Pay-Logo.jpg" alt="" />
                                    <img src="data:image/png;base64,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" alt="" />
                                    <img src="https://cdn.shopify.com/s/files/1/0059/2435/6185/files/sp_pay_480x480.png?v=1623658014" alt="" />

                                </div>

                            </div>


                        </div>

                    </div>

                    <div className="copyright">
                          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
                    </div>

                </div>

            </div>
        </>
    )

}

export default Footer