import "./Dashboard.css"
import { useNavigate } from "react-router-dom";

function Dashboard() {
    let navigate = useNavigate();
    return (
        <div className="card">
          <div className="card__image">
            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
          </div>
          <div className="card__copy">
              <h1>Prince Kalra</h1>
            <h2><b>Phone no:</b>8708143712</h2>
            <br></br>
              <h2><b>Address :::</b>House No. 3368 Banjarwara Mohalla Rewari</h2>
              <br></br>
              <h2><b>Wish Books List ::</b> To Kill a Mockingbird. The Great Gatsby. ...One Hundred Years of Solitude. .Invisible Man. ...</h2>

              <br></br>
              <h2>Recently Purchased :: <b>Bharat Ki khoj </b> <b>Mhabharat</b> </h2>
              <button className="btn btn-success" onClick={()=>navigate("/BookStore")}>Purchase more Books Items</button>
          </div>
        </div>
      );
}
export default Dashboard;