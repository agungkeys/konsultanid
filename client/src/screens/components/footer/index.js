import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input } from 'semantic-ui-react';
import PropTypes from "prop-types";

class Footer extends Component {
	constructor() {
		super();
		this.state = {}
	}
	render(){
		// const {title} = this.props;
		return(
			<div id='footer'>
				<div className="footer-top-section">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="footer-rows-container">
									<div className="footer-rows-left">
										<div className="footer-row">
											<div className="footer-row-inner footer-logo">
												<img src="images/logo2.png" alt=""/>
											</div>
										</div>
									</div>
									<div className="footer-rows-right">
										<div className="footer-row">
											<div className="footer-row-inner">
												<ul className="footer-social-links">
													<li>
														<Link to="/" title="Facebook" data-tippy-placement="bottom"
															 data-tippy-theme="light">
															<i className="icon-brand-facebook-f"/>
														</Link>
													</li>
													<li>
														<Link to="/" title="Twitter" data-tippy-placement="bottom"
															 data-tippy-theme="light">
															<i className="icon-brand-twitter"/>
														</Link>
													</li>
													<li>
														<Link to="/" title="Google Plus" data-tippy-placement="bottom"
															 data-tippy-theme="light">
															<i className="icon-brand-google-plus-g"/>
														</Link>
													</li>
													<li>
														<Link to="/" title="LinkedIn" data-tippy-placement="bottom"
															 data-tippy-theme="light">
															<i className="icon-brand-linkedin-in"/>
														</Link>
													</li>
												</ul>
												<div className="clearfix"/>
											</div>
										</div>
										<div className="footer-row">
											<div className="footer-row-inner">

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-middle-section">
					<div className="container">
						<div className="row">
							<div className="col-xl-2 col-lg-2 col-md-3">
								<div className="footer-links">
									<h3>Konsultan ID</h3>
									<ul>
										<li><Link to="/"><span>Tentang Kami</span></Link></li>
										<li><Link to="/"><span>Karir</span></Link></li>
										<li><Link to="/"><span>Blog</span></Link></li>
										<li><Link to="/"><span>Artikel</span></Link></li>
										<li><Link to="/"><span>Testimoni</span></Link></li>
										<li><Link to="/"><span>Benefit</span></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-2 col-lg-2 col-md-3">
								<div className="footer-links">
									<h3>Konsultan</h3>
									<ul>
										<li><Link to="/"><span>Cara Menjadi Konsultan</span></Link></li>
										<li><Link to="/"><span>Cari Penyedia Proyek</span></Link></li>
										<li><Link to="/"><span>Sertifikasi Konsultan</span></Link></li>
										<li><Link to="/"><span>Manajemen Proyek</span></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-2 col-lg-2 col-md-3">
								<div className="footer-links">
									<h3>Perusahaan</h3>
									<ul>
										<li><Link to="/"><span>Cara Menjadi Penyedia Proyek</span></Link></li>
										<li><Link to="/"><span>Cari Konsultan</span></Link></li>
										<li><Link to="/"><span>Manajemen Proyek</span></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-2 col-lg-2 col-md-3">
								<div className="footer-links">
									<h3>Bantuan</h3>
									<ul>
										<li><Link to="/"><span>Syarat & Ketentuan</span></Link></li>
										<li><Link to="/"><span>Kebijakan Privasi</span></Link></li>
										<li><Link to="/"><span>Komplain / Feedback</span></Link></li>
										<li><Link to="/"><span>Menjadi Mitra Kami</span></Link></li>
										<li><Link to="/"><span>Hubungi Kami</span></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-12">
								<h3><i className="icon-feather-mail"/> Daftar untuk Newsletter</h3>
								<p>Berita terbaru, analisis, dan saran terkini tentang konsultan & proyek.</p>
								<form action="#" method="get" className="newsletter">
									<Input type="text" name="fname" placeholder="Enter your email address"/>
										<button type="submit"><i className="icon-feather-arrow-right"/></button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom-section">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								© 2019 <strong>KonsultanID</strong>. All Rights Reserved.
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Footer.propTypes = {
};

Footer.defaultProps = {

};

export default Footer;