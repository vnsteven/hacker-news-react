import React from 'react';
import Comment from './Comment/Comment';
import styles from './Comments.module.css';

const comments = (props) => (
  <div className={styles.Comments}>
    {props.comments.map((comment) => {
      return (
        <Comment key={comment.id} author={comment.by} text={comment.text} />
      );
    })}
  </div>
);

export default comments;
