import { HStack, Image,Text} from '@chakra-ui/react';
import gamersLogo from '../assets/gamersLogo.jpeg'
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const Navbar = () => {
  return (
    <HStack padding='10px'>
      
        <Image src={gamersLogo} alt='logo' boxSize='60px'/>
        {/* <Text style={{paddingTop:'20px'}}>GAMEBOY</Text> */}
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar