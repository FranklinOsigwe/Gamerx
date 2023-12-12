import { HStack, Image,Text} from '@chakra-ui/react';
import gamersLogo from '../assets/gamersLogo.jpeg'
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText : string) => void
}


const Navbar = ({onSearch}: Props) => {
  return (
    <HStack padding='10px'>
      
        <Image src={gamersLogo} alt='logo' boxSize='60px'/>
        {/* <Text style={{paddingTop:'20px'}}>GAMEBOY</Text> */}
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar