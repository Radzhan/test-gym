import Abonement from "../../../widgets/Abonement/ui/Abonement";
import { Advantages } from "../../../widgets/Advantages";
import { Fitness } from "../../../widgets/Fitness";
import { Footer } from "../../../widgets/Footer";
import { FreeContacts } from "../../../widgets/FreeContacts";
import { Games } from "../../../widgets/Games";
import { Promotion } from "../../../widgets/Promotion";


export const MainPage = () => {
    return (
        <div>
            <Fitness/>
            <Abonement/>
            <Games/>
            <Advantages/>
            <Promotion/>
            <FreeContacts/>
            <Footer/>
        </div>
    );
};
