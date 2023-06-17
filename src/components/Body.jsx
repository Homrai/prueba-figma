
import comp from "../assets/comparison.png";
import Div4 from "./divsBody/Div4Body";
import Carousel from "./divsBody/Carousel";
import Div1Body from "./divsBody/Div1Body";
const Body = () => {
  return (
    <div className="body">
        <div>
            <Div1Body/>
            <section className="div-4">
                <div>
                    <div className="div-4-general-settings d1">
                        
                    </div>
                    <div className="div-4-general-settings d3">
                    </div>
                </div>
                <div>
                    <div className="div-4-general-settings d-none d2">
                        
                    </div>
                    <div className="div-4-general-settings d4">
                        <Div4/>
                    </div>
                </div>
            </section>
        </div>
        <div>

        <section className="comparison-div d-none">
            <div  className="d-flex justify-content-between sales-div">
                <div className="sales-div">
                    Sales Comparison
                    <p className="p-than">Than last day</p>
                </div>
                <h1 className="percent-h1">94%</h1>
            </div>
            <img src={comp} alt="comparison img" className="img-comp"/>
        </section>
        <section className="galleries-little">
            <h1>Event Galleries</h1>
            <div>
                <Carousel />
            </div>
        </section>
        </div>

    </div>
  )
}

export default Body
