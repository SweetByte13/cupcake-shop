import CupcakeCard from "../components/CupcakeCard";
import NavBar from "../components/NavBar";
import Table from "../components/Table";
import Toppings from "../components/Toppings";


function CupcakeDesigner() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <h1>Cupcake Designer!</h1>
            <Table />
            <Toppings />
        </div>
    )
}

export default CupcakeDesigner;