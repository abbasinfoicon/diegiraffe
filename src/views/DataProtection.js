import React from 'react'
import { Link } from 'react-router-dom'

const DataProtection = () => {
  return (
    <div className="full-eventWrapper text-center">
      <div className="header">
        <Link to="/">back to app</Link>
      </div>

      <div className="content py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h3>Data protection</h3>

              <p>1. Privacy at a glance</p>

              <p><strong>General information</strong> <br />
                The following notes provide a simple overview of what happens to your personal data when you visit our website.
                Personal data is all data with which you can be personally identified. Detailed information on the subject of data protection
                can be found in our data protection declaration listed under this text.</p>

              <p><strong>Data collection on our website</strong> <br />
                Who is responsible for data collection on this website? <br />
                The data processing on this website is carried out by the website operator. You can find their contact details in the imprint of this website. <br />
                How do we collect your data? <br />
                On the one hand, your data is collected when you communicate it to us. This can, for example, be data that you enter in a contact form. <br />
                Other data is automatically recorded by our IT systems when you visit the website. This is primarily technical data
                (e.g. internet browser, operating system or time of the page call). This data is collected automatically as soon as you enter our website. <br />
                What do we use your data for? <br />
                Part of the data is collected to ensure that the website is provided without errors. Other data can be used to analyze your user behavior. <br />
                What rights do you have regarding your data? <br />
                You have the right to receive information about the origin, recipient and purpose of your stored personal data free of charge at any time.
                You also have the right to request the correction, blocking or deletion of this data. You can contact us at any time at the address given in the imprint
                if you have any further questions on the subject of data protection. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.</p>

              <p><strong>Analysis tools and third-party tools</strong> <br />
                When you visit our website, your surfing behavior can be statistically evaluated. This is mainly done with cookies and so-called analysis programs.
                The analysis of your surfing behavior is usually anonymous; surfing behavior cannot be traced back to you. You can object to this analysis or prevent
                it by not using certain tools. You will find detailed information on this in the following data protection declaration. <br />
                You can object to this analysis. We will inform you about the possibilities of objection in this data protection declaration.
              </p>

              <p><strong>2. General information and mandatory information data protection</strong> <br />
                The operators of these pages take the protection of your personal data very seriously.
                We treat your personal data confidentially and in accordance with the statutory data protection regulations and this data protection declaration. <br />

                If you use this website, various personal data will be collected. Personal data is data with which you can be personally identified.
                This data protection declaration explains what data we collect and what we use it for. It also explains how and for what purpose this happens. <br />

                We would like to point out that data transmission on the Internet (e.g. when communicating by e-mail) can have security gaps.
                A complete protection of the data against access by third parties is not possible.</p>

              <p><strong>Note on the responsible body</strong> <br />
                The responsible body for data processing on this website is: <br />
                Daniela Schober - Grabengasse 1 - 86609 Donauwörth <br />
                Telefon: 015170897844 <br />
                E-Mail: info@dieGiraffe.shop <br />
                The responsible body is the natural or legal person who alone or together with others decides on the purposes and means of processing personal data
                (e.g. names, e-mail addresses, etc.).
              </p>

              <p><strong>Revocation of your consent to data processing</strong><br /></p>
              <p><strong>Right of appeal to the competent supervisory authority</strong><br /></p>
              <p><strong>Right to data portability</strong><br /></p>
              <p><strong>SSL or TLS encryption</strong><br /></p>
              <p><strong>Information, blocking, deletion</strong><br /></p>
              <p><strong></strong><br /></p>
              <p><strong></strong><br /></p>
            </div>
          </div>
        </div>


      </div>

      <div className="footer">
        <Link to="/">back to app</Link>
      </div>
    </div>
  )
}

export default DataProtection