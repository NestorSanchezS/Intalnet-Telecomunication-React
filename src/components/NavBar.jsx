import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="preloader">
        <div className="preloader_image"></div>
      </div>

      <div
        className="modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="search_modal"
        id="search_modal"
      >
        <button
          type="button"
          clasNames="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="widget widget_search">
          <a href="./" class="logo">
            <span className="logo-text py-20">
              <strong>Maxi</strong>com
            </span>
          </a>
          <form method="get" class="searchform search-form" action="/">
            <div className="form-group">
              <input
                type="text"
                value=""
                name="search"
                className="form-control"
                placeholder="Search keyword"
                id="modal-search-input"
              />
            </div>
            <button type="submit" className="btn">
              Search
            </button>
          </form>
        </div>
      </div>

      <div
        className="modal fade"
        tabindex="-1"
        role="dialog"
        id="messages_modal"
      >
        <div className="fw-messages-wrap ls p-normal">
          <ul className="list-unstyled">
            <li>Message To User</li>
          </ul>
        </div>
      </div>
      <div clasName="header_absolute header_layout_1">
        <header className="page_header ls justify-nav-end">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-4 col-md-5 col-11">
                <a href="./" className="logo">
                  <span className="logo-text py-20">
                    <strong>Maxi</strong>com
                  </span>
                </a>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-7 col-1">
                <div className="nav-wrap">
                  <nav className="top-nav">
                    <ul className="nav sf-menu">
                      <li className="active">
                        <a href="index.html">Home</a>
                        <ul>
                          <li>
                            <a href="index.html">Home 1</a>
                          </li>
                          <li>
                            <a href="index2.html">Home 2</a>
                          </li>
                          <li>
                            <a href="index_static.html">Static Intro</a>
                          </li>
                          <li>
                            <a href="index_singlepage.html">Single Page</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="about.html">Pages</a>
                        <ul>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                            <ul>
                              <li>
                                <a href="team.html">Team List</a>
                              </li>
                              <li>
                                <a href="team-single.html">Team Member</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="services.html">Our Services</a>
                            <ul>
                              <li>
                                <a href="services.html">Services 1</a>
                              </li>
                              <li>
                                <a href="services2.html">Services 2</a>
                              </li>
                              <li>
                                <a href="services3.html">Services 3</a>
                              </li>
                              <li>
                                <a href="service-single.html">Single Service</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="availability-map.html">Availability Map</a>
                          </li>
                          <li>
                            <a href="booking-form.html">Booking Form</a>
                          </li>

                          <li>
                            <a href="gallery-image.html">Gallery</a>
                            <ul>
                              <li>
                                <a href="gallery-image.html">Gallery Regular</a>
                                <ul>
                                  <li>
                                    <a href="gallery-image-2-cols.html">
                                      2 columns
                                    </a>
                                  </li>
                                  <li>
                                    <a href="gallery-image.html">3 columns</a>
                                  </li>
                                  <li>
                                    <a href="gallery-image-4-cols-fullwidth.html">
                                      4 columns fullwidth
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li>
                                <a href="gallery-title.html">Gallery Title</a>
                                <ul>
                                  <li>
                                    <a href="gallery-title-2-cols.html">
                                      2 columns
                                    </a>
                                  </li>
                                  <li>
                                    <a href="gallery-title.html">3 column</a>
                                  </li>
                                  <li>
                                    <a href="gallery-title-4-cols-fullwidth.html">
                                      4 columns fullwidth
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li>
                                <a href="gallery-excerpt.html">
                                  Gallery Excerpt
                                </a>
                                <ul>
                                  <li>
                                    <a href="gallery-excerpt-2-cols.html">
                                      2 columns
                                    </a>
                                  </li>
                                  <li>
                                    <a href="gallery-excerpt.html">3 column</a>
                                  </li>
                                  <li>
                                    <a href="gallery-excerpt-4-cols-fullwidth.html">
                                      4 columns fullwdith
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li>
                                <a href="gallery-tiled.html">Tiled Gallery</a>
                              </li>

                              <li>
                                <a href="gallery-single.html">Gallery Single</a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="pricing.html">Pricing</a>
                          </li>

                          <li>
                            <a href="events-left.html">Events</a>
                            <ul>
                              <li>
                                <a href="events-left.html">Left Sidebar</a>
                              </li>
                              <li>
                                <a href="events-right.html">Right Sidebar</a>
                              </li>
                              <li>
                                <a href="events-full.html">Full Width</a>
                              </li>
                              <li>
                                <a href="event-single-left.html">
                                  Single Event
                                </a>
                                <ul>
                                  <li>
                                    <a href="event-single-left.html">
                                      Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="event-single-right.html">
                                      Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="event-single-full.html">
                                      Full Width
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="faq.html">FAQ</a>
                            <ul>
                              <li>
                                <a href="faq.html">FAQ</a>
                              </li>
                              <li>
                                <a href="faq2.html">FAQ 2</a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="shop-full.html">Shop</a>
                            <ul>
                              <li>
                                <a href="shop-account-dashboard.html">
                                  Account
                                </a>
                                <ul>
                                  <li>
                                    <a href="shop-account-details.html">
                                      Account details
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-account-addresses.html">
                                      Addresses
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-account-address-edit.html">
                                      Edit Address
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-account-orders.html">
                                      Orders
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-account-order-single.html">
                                      Single Order
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-account-downloads.html">
                                      Downloads
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-account-password-reset.html">
                                      Password Reset
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-account-login.html">
                                      Login/Logout
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop-full.html">Shop Full Width</a>
                              </li>
                              <li>
                                <a href="shop-left.html">Shop Left Sidebar</a>
                              </li>
                              <li>
                                <a href="shop-right.html">Shop Right Sidebar</a>
                              </li>
                              <li>
                                <a href="shop-product-right.html">
                                  Product Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-product-left.html">
                                  Product Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-cart.html">Cart</a>
                              </li>
                              <li>
                                <a href="shop-checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="shop-order-received.html">
                                  Order Received
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="terms_of_use.html">Terms Of Use</a>
                          </li>

                          <li>
                            <a href="shortcodes_iconbox.html">Shortcodes</a>
                            <ul>
                              <li>
                                <a href="shortcodes_typography.html">
                                  Typography
                                </a>
                              </li>
                              <li>
                                <a href="shortcodes_buttons.html">Buttons</a>
                              </li>
                              <li>
                                <a href="shortcodes_pricing.html">Pricing</a>
                              </li>
                              <li>
                                <a href="shortcodes_iconbox.html">Icon Boxes</a>
                              </li>
                              <li>
                                <a href="shortcodes_progress.html">Progress</a>
                              </li>
                              <li>
                                <a href="shortcodes_tabs.html">
                                  Tabs &amp; Collapse
                                </a>
                              </li>
                              <li>
                                <a href="shortcodes_bootstrap.html">
                                  Bootstrap Elements
                                </a>
                              </li>
                              <li>
                                <a href="shortcodes_animation.html">
                                  Animation
                                </a>
                              </li>
                              <li>
                                <a href="shortcodes_icons.html">
                                  Template Icons
                                </a>
                              </li>
                              <li>
                                <a href="shortcodes_socialicons.html">
                                  Social Icons
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="shortcodes_widgets_default.html">
                              Widgets
                            </a>
                            <ul>
                              <li>
                                <a href="shortcodes_widgets_default.html">
                                  Default Widgets
                                </a>
                              </li>
                              <li>
                                <a href="shortcodes_widgets_shop.html">
                                  Shop Widgets
                                </a>
                              </li>
                              <li>
                                <a href="shortcodes_widgets_custom.html">
                                  Custom Widgets
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="comingsoon.html">Comingsoon</a>
                          </li>
                          <li>
                            <a href="404.html">404</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="internet.html">internet</a>
                      </li>

                      <li>
                        <a href="iptv.html">iptv</a>
                      </li>

                      <li>
                        <a href="voip.html">voip</a>
                      </li>

                      <li>
                        <a href="blog-right.html">Blog</a>
                        <ul>
                          <li>
                            <a href="blog-right.html">Right Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-left.html">Left Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-full.html">No Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>

                          <li>
                            <a href="blog-single-right.html">Post</a>
                            <ul>
                              <li>
                                <a href="blog-single-right.html">
                                  Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-single-left.html">Left Sidebar</a>
                              </li>
                              <li>
                                <a href="blog-single-full.html">No Sidebar</a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="blog-single-video-right.html">
                              Video Post
                            </a>
                            <ul>
                              <li>
                                <a href="blog-single-video-right.html">
                                  Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-single-video-left.html">
                                  Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-single-video-full.html">
                                  No Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="contact.html">Contact</a>
                        <ul>
                          <li>
                            <a href="contact.html">Contact 1</a>
                          </li>
                          <li>
                            <a href="contact2.html">Contact 2</a>
                          </li>
                          <li>
                            <a href="contact3.html">Contact 3</a>
                          </li>
                          <li>
                            <a href="contact4.html">Contact 4</a>
                          </li>
                          <li>
                            <a href="contact5.html">Contact 5</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#">Features</a>
                        <div class="mega-menu">
                          <ul class="mega-menu-row">
                            <li class="mega-menu-col">
                              <a href="#">Headers</a>
                              <ul>
                                <li>
                                  <a href="header1.html">Header Type 1</a>
                                </li>
                                <li>
                                  <a href="header2.html">Header Type 2</a>
                                </li>
                                <li>
                                  <a href="header3.html">Header Type 3</a>
                                </li>
                                <li>
                                  <a href="header4.html">Header Type 4</a>
                                </li>
                                <li>
                                  <a href="header5.html">Header Type 5</a>
                                </li>
                                <li>
                                  <a href="header6.html">Header Type 6</a>
                                </li>
                              </ul>
                            </li>
                            <li class="mega-menu-col">
                              <a href="#">Side Menus</a>
                              <ul>
                                <li>
                                  <a href="header-side.html">Push Left</a>
                                </li>
                                <li>
                                  <a href="header-side-right.html">
                                    Push Right
                                  </a>
                                </li>
                                <li>
                                  <a href="header-side-slide.html">
                                    Slide Left
                                  </a>
                                </li>
                                <li>
                                  <a href="header-side-slide-right.html">
                                    Slide Right
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li class="mega-menu-col">
                              <a href="title1.html">Title Sections</a>
                              <ul>
                                <li>
                                  <a href="title1.html">Title section 1</a>
                                </li>
                                <li>
                                  <a href="title2.html">Title section 2</a>
                                </li>
                                <li>
                                  <a href="title3.html">Title section 3</a>
                                </li>
                                <li>
                                  <a href="title4.html">Title section 4</a>
                                </li>
                                <li>
                                  <a href="title5.html">Title section 5</a>
                                </li>
                                <li>
                                  <a href="title6.html">Title section 6</a>
                                </li>
                              </ul>
                            </li>
                            <li class="mega-menu-col">
                              <a href="footer1.html#footer">Footers</a>
                              <ul>
                                <li>
                                  <a href="footer1.html#footer">
                                    Footer Type 1
                                  </a>
                                </li>
                                <li>
                                  <a href="footer2.html#footer">
                                    Footer Type 2
                                  </a>
                                </li>
                                <li>
                                  <a href="footer3.html#footer">
                                    Footer Type 3
                                  </a>
                                </li>
                                <li>
                                  <a href="footer4.html#footer">
                                    Footer Type 4
                                  </a>
                                </li>
                                <li>
                                  <a href="footer5.html#footer">
                                    Footer Type 5
                                  </a>
                                </li>
                                <li>
                                  <a href="footer6.html#footer">
                                    Footer Type 6
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li class="mega-menu-col">
                              <a href="copyright1.html#copyright">Copyright</a>

                              <ul>
                                <li>
                                  <a href="copyright1.html#copyright">
                                    Copyright 1
                                  </a>
                                </li>
                                <li>
                                  <a href="copyright2.html#copyright">
                                    Copyright 2
                                  </a>
                                </li>
                                <li>
                                  <a href="copyright3.html#copyright">
                                    Copyright 3
                                  </a>
                                </li>
                                <li>
                                  <a href="copyright4.html#copyright">
                                    Copyright 4
                                  </a>
                                </li>
                                <li>
                                  <a href="copyright5.html#copyright">
                                    Copyright 5
                                  </a>
                                </li>
                                <li>
                                  <a href="copyright6.html#copyright">
                                    Copyright 6
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </nav>

                  <ul class="top-includes d-none d-xl-block search-icon">
                    <li>
                      <span>
                        <a href="#" class="search_modal_button">
                          <i class="fa fa-search"></i>
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <span class="toggle_menu">
            <span></span>
          </span>
        </header>

        <div class="page_header_wrapper main-header-side">
          <div class="page_header_side header_slide header_side_right aaaa ls">
            <span class="toggle_menu toggle_menu_side header-slide">
              <span></span>
            </span>
            <div class="scrollbar-macosx">
              <div class="side_header_inner">
                <div class="header-side-menu">
                  <nav class="mainmenu_side_wrapper">
                    <ul class="nav menu-click">
                      <li>
                        <a href="faq.html">
                          <i class="color-main7 fa fa-question-circle"></i>
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a href="booking-form.html">
                          <i class="color-main7 fa fa-paper-plane"></i>
                          Submit a ticket
                        </a>
                      </li>
                      <li>
                        <a href="terms_of_use.html">
                          <i class="color-main7 fa fa-rocket"></i>
                          Terms Of Use
                        </a>
                      </li>
                      <li>
                        <a href="availability-map.html">
                          <i class="color-main7 fa fa-file-text-o"></i>
                          Terms of Service
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">
                          <i class="color-main7 fa fa-phone"></i>
                          call me back
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="facebook-messeger d-flex align-items-center hero-bg">
              <img src="images/messeger.png" alt="" />
              <a href="https://messenger.com" class="small-text">
                facebook messeger
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
