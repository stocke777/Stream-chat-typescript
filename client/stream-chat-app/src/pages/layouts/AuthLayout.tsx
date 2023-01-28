import { Outlet } from "react-router-dom";
import{FullScreenCard} from './../../components/FullBodyCard'
export function AuthLayout(){
    return (
        <FullScreenCard>
            <FullScreenCard.Body>
                <Outlet/>
            </FullScreenCard.Body>
            <FullScreenCard.Lower>
                YOOO
            </FullScreenCard.Lower>
        </FullScreenCard>
    )
}