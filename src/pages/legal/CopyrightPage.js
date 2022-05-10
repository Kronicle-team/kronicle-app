/***************************************************************
 *Title: Website Copyright Generator
 *Author:  HTML Code Generator
 *Date: 11 May 2022
 *Availability: https://www.html-code-generator.com/html/website-copyright-generator (Accessed 11 May 2022)
 ****************************************************************/
import Layout from "../../components/Layout";

const CopyrightPage = () => {
  return (
    <Layout header footer>
      <div className="copyright" align="center">
        <script>
          document.write('&copy;' );
          document.write(' 2022 - ');
          document.write(new Date().getFullYear());
          document.write(' https://github.com/Kronicle-team/kronicle-app - All Rights Reserved.');
          document.write('<br />Last Updated : ');
          document.write(document.lastModified);
        </script>
      </div>

    </Layout>
  )
};

export default CopyrightPage;
