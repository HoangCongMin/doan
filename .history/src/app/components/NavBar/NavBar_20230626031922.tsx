import Container from "../Container/Container"
import Search from "../Search/Search"
import UserMenu from "../UserMenu/UserMenu"
import {User} from'@prisma/client'
import {safeUser} from'../../types/typeUser'


interface UserNavbar{
    curentUser:safeUser | null 
}
const NavBar=({curentUser}:UserNavbar)=>{
 return(
    <div className="w-full">
        <Container>
           <Search/>
           <UserMenu curentUser={curentUser}/>
        </Container>
    </div>
 )
}

export default NavBar