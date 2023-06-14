import React from "react";

const footer = () => {
  return (
    <section className="container-fluid footer_section">
      <p>
        Copyright © 2023 All Rights Reserved By 
        <a>Mark Vibes</a>
      </p>
      <p>
        <a href="disclaimer.html" target="_blank">
          {" "}
          Disclaimer &amp; Privacy Policy{" "}
        </a>
        <br />
        {/*| Mark Vibes Planned and Powered by */}
        <a href="sitemap.xml" target="_blank">
          Site Map
        </a>
        {/*| <a href="https://www.instagram.com/harshsinghjii/" target="_blank">Google Partner <img src="https://www.gstatic.com/partners/badge/images/2021/PartnerBadgeClickable.svg" alt="Google Partner Logo" class="google-partner" width="20px" style="box-shadow: 1px 1px 3px;"> </a>*/}
      </p>
    </section>
  );
};

export default footer;
