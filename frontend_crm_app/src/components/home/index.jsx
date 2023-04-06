import styles from "./styles.module.css";
import { Card, Button } from "react-bootstrap";

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>
          Hello <span> &#128515;</span>
        </h1>
        <Card style={{ width: "20rem", marginTop: "500px", height: "375px" }}>
          <Card.Img
            variant="top"
            src="https://www.associated-solutions.com/-/media/dealers/associated/associated-images/customer-portal_service-request/servicerequest_500x300.jpg?rev=b1996fbc51594e289958dfca5df43afb&h=300&w=500&la=en&hash=D59AE223219891A1525F3AD7CA4FC64B/100px180"
          />
          <Card.Body>
            <Card.Title>Service Requests</Card.Title>
            <Card.Text>
              These functionalites are not working Sorry for the issue!!!
            </Card.Text>
            <Button variant="primary">Service Requests</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem", marginTop: "500px", height: "375px" }}>
          <Card.Img
            variant="top"
            src="https://blog.inmarketing.co/hs-fs/hubfs/112.%20%5BArt%C3%ADculo%5D%205%20pasos%20para%20crear%20un%20embudo%20de%20captaci%C3%B3n%20de%20leads%20de%20calidad/Newsletter-Generacion%20de%20leads.jpg?width=1200&name=Newsletter-Generacion%20de%20leads.jpg/100px180"
          />
          <Card.Body>
            <Card.Title>Leads</Card.Title>
            <Card.Text>
              These functionalites are not working Sorry for the issue!!!
            </Card.Text>
            <Button variant="primary">Leads</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem", marginTop: "500px", height: "375px" }}>
          <Card.Img
            variant="top"
            src="https://thumbs.dreamstime.com/b/businessman-touching-screen-human-resources-consept-69259222.jpg/100px180"
          />
          <Card.Body>
            <Card.Title>Contacts</Card.Title>
            <Card.Text>
              These functionalites are not working Sorry for the issue!!!
            </Card.Text>
            <Button variant="primary">Contacts</Button>
          </Card.Body>
        </Card>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Home;
