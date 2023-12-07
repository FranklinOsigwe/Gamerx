import { HStack, Image} from '@chakra-ui/react';
import gamersLogo from '../assets/gamersLogo.jpeg'
import ColorModeSwitch from './ColorModeSwitch';

const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={gamersLogo} alt='logo' boxSize='60px'/>
        {/* <Text>GAMEBOY</Text> */}
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar