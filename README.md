# Takashi

The AI in this game is not a sophisticated artificial intelligence in the sense of machine learning or deep learning. Instead, it uses simple rule-based logic to make decisions. Here's a breakdown of why this is considered AI, albeit basic:

### Rule-Based AI
- **Definition**: Rule-based AI systems operate by following a set of predefined rules or logic to make decisions.
- **In the Game**:
  - **Easy Level**: Makes random moves.
  - **Medium Level**: Attempts to block the opponent's winning moves and take winning moves if available. It uses simple heuristics like prioritizing corners and the center.
  - **Hard Level**: Similar to Medium but with slightly more strategic prioritization.
  - **Superhard Level**: Uses more advanced rule-based strategies to look ahead and make optimal moves, though not as advanced as minimax algorithm in full detail.

### Characteristics of AI in This Game:
1. **Decision Making**: The AI makes decisions based on the current state of the board.
2. **Strategy**: The AI employs different strategies depending on the difficulty level, which involves blocking, winning, and prioritizing moves.
3. **Adaptability**: The AI changes its behavior based on the selected difficulty level, providing a varied experience.

### Why This Is Still Considered AI:
- **Automated Decision Making**: The AI automates decision-making processes, which is a fundamental aspect of AI.
- **Rule-Based Systems**: Many early AI systems and some modern ones (like expert systems) are rule-based, and they are still considered AI.
- **Complexity Levels**: Even simple rule-based systems can be considered AI, especially in games, because they simulate intelligent behavior within the context of the game.

### Limitations:
- **Not Learning-Based**: The AI does not learn or adapt over time. It doesn't use machine learning or adapt its strategy based on previous games.
- **Predictability**: For higher difficulty levels, predictable patterns can emerge since it follows specific rules.

### Enhancements for More Advanced AI:
To make the AI more sophisticated, you could implement algorithms like Minimax, which would involve:
1. **Minimax Algorithm**: This would allow the AI to look ahead several moves and choose the optimal move that minimizes the maximum loss (or maximizes the minimum gain).
2. **Alpha-Beta Pruning**: An optimization technique for the Minimax algorithm that reduces the number of nodes evaluated in the search tree.
3. **Reinforcement Learning**: Implementing a learning-based AI that improves over time through experience.

### Conclusion:
While the current implementation uses simple rule-based logic, it is still considered a basic form of AI because it automates decision-making and exhibits different levels of intelligent behavior based on rules and heuristics. For more advanced AI, integrating algorithms like Minimax or machine learning techniques would be the next step.
