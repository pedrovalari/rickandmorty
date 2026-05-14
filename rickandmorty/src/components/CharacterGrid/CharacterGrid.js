import { AnimatePresence, motion } from 'framer-motion';
import CharacterCard from '../CharacterCard/CharacterCard';
import { staggerContainer } from '../../constants/animations';
import './CharacterGrid.css';

const CharacterGrid = ({ characters }) => (
  <motion.section
    className="grid"
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
  >
    <AnimatePresence mode="popLayout">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </AnimatePresence>
  </motion.section>
);

export default CharacterGrid;
