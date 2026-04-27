"use client";

export default function Home() {
  const redirectUrl = "https://giftclick.org/aff_c?offer_id=941&aff_id=178257";

  return (
    <div className="mobile-card">
      {/* COSTCO LOGO */}
      <div className="logo-header">
        <div className="costco-logo">
          <div className="name">COSTCO</div>
          <div className="wholesale-wrap">
            <div className="bar"></div>
            <div className="wholesale">WHOLESALE</div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      {/* GIFT CARD OFFER CARD */}
      <div className="offer-card">
        <div className="offer-badge">⭐ Exclusive Member Offer</div>
        <h2>
          Claim Your <span>$750</span>
          <br />
          Costco Gift Card
        </h2>
        <p className="sub">
          Available to verified Costco members — limited quantities left this
          month.
        </p>

        <div className="steps">
          <div className="step">
            <div className="snum">1</div>
            <div>
              <h3>Tap the Button Below</h3>
              <p>Click "Get My Gift Card" to go to the official offer page.</p>
            </div>
          </div>
          <div className="step">
            <div className="snum">2</div>
            <div>
              <h3>Enter Your Details</h3>
              <p> Provide your name and email address to register for the offer.</p>
            </div>
          </div>
          <div className="step">
            <div className="snum">3</div>
            <div>
              <h3>Complete the Tasks</h3>
              <p>
                Answer a short survey and complete the required deal offers to
                qualify.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="snum">4</div>
            <div>
              <h3>Receive Your Gift Card</h3>
              <p>
                Once verified, your $750 Costco e-gift card will be sent by
                email.
              </p>
            </div>
          </div>
        </div>

        <a href={redirectUrl} className="cta-btn" id="main-cta">
          🎁 GET MY GIFT CARD
        </a>

        <div className="trust-row">
          <div className="trust-item">
            <div className="trust-icon">🔒</div>
            <div className="trust-label">SECURE</div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">✅</div>
            <div className="trust-label">VERIFIED</div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">⚡</div>
            <div className="trust-label">FAST</div>
          </div>
        </div>

        <div className="progress-row">
          <span>● AVAILABILITY</span>
          <span>73% Claimed</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <p className="claim-note">
          <strong>2,847 members</strong> have claimed their gift card this month
        </p>
      </div>

      {/* FOOTER */}
      <footer>
        &copy; {new Date().getFullYear()} Costco Wholesale Corporation. All rights reserved.
        <br />
        <a href="#">Privacy Policy</a> &nbsp;|&nbsp; <a href="#">Terms of Use</a>
      </footer>
    </div>
  );
}
