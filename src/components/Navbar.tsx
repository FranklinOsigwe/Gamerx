import { HStack, Image,Text} from '@chakra-ui/react';
import gamersLogo from '../assets/gamersLogo.jpeg'
import ColorModeSwitch from './ColorModeSwitch';

const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <div style={{display:'flex'}}>
        <Image src={gamersLogo} alt='logo' boxSize='60px'/>
        <Text style={{paddingTop:'20px'}}>GAMEBOY</Text>
        </div>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar