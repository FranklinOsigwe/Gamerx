import { Button, HStack, Heading, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenreList";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre,selectedGenre} : Props) => {
  const {data, isLoading, error} = useGenres();
  if(error) return null
  return (
    <div>
      {isLoading && <Spinner/>}
      <Heading fontSize='2xl' paddingY='10px'>Genres</Heading>
     <List>
     {data.map((genre) => <ListItem key={genre.id} paddingY='7px'><HStack><Image boxSize='32px' borderRadius={8} src={genre.image_background}/>
     <Button  whiteSpace='nromal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='md' variant='link'>{genre.name}</Button>
     </HStack></ListItem>)}
      </List> 
    </div>
  )
}

export default GenreList