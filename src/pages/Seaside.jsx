import Amenities from "../components/Amenities"
import Feautured from "../components/Feautured_one"
import Footer from "../components/Footer"
import Property from "../components/Property"
import Villa from "../components/Villa"

const Seaside = () => {
    return (
        < >
            <Villa />
            <Property />
            <Amenities />   
            <Feautured />
            <Footer />
        </>
    )
}

export default Seaside