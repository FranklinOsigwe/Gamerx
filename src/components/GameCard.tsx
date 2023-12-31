import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
    return (
      <Card width='300px' borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map((item) => item.platform)} />
          <CriticScore score={game.metacritic}/>
          </HStack>
        </CardBody>
      </Card>
    );
  };
export default GameCard;
