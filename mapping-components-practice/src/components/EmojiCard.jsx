import React from "react";

function EmojiCard(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

function createEmojiCard(emoji_data) {
  return (
    <EmojiCard
      key={emoji_data.id}
      emoji={emoji_data.emoji}
      name={emoji_data.name}
      meaning={emoji_data.meaning}
    />
  );
}

export default EmojiCard;
export { createEmojiCard };
