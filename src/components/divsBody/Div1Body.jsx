import sell1 from "../../assets/selling1.png";
import sell2 from "../../assets/selling2.png";
const Div1Body = () => {
  return (
    <section className="selling-div">
                <div className="d-flex justify-content-between">
                    <p className="best-font">Best Selling</p>
                    <button className="week-button">This week <i className="bi bi-caret-down-fill align-self-center i-week"></i></button>
                </div>
                <div className="day-div d-flex justify-content-between">
                    <p>Tuesday</p>
                    <p>215,523 pcs</p>
                </div>
                <div className="sell-img-div">
                    <img src={sell1} alt="selling best img 1" className="sell-img" />
                    <img src={sell2} alt="selling best img 2" className="d-none sell-img2" />
                </div>
            </section>
  )
}

export default Div1Body
