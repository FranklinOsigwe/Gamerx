import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenreList";
import { GameQuery } from "../App";
 

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({gameQuery} : Props) => {
    const {data, error, isLoading} = useGames(gameQuery)
    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} padding='10px' spacing={5}> 
      {isLoading &&  skeletons.map((item) => <GameCardContainer key={item}><GameCardSkeleton key={item}/></GameCardContainer>)}
        {data.map((game) => (
          <GameCardContainer><GameCard key={game.id} game={game} /> </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
