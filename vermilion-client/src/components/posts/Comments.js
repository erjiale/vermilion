import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
// MUI
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
    invisLine: {
        border: 'none',
        margin: 4
    },
    visibleSeparator: {
        width: '100%',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        marginBottom: 20
    },
    commentImage: {
        height: 100,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%'
    },
    commentData: {
        marginLeft: 20
    },
    link: {
        cursor: 'pointer'
    }
}

class Comments extends Component {
    
    render() {
        const { classes, comments } = this.props;
        
        return (
            <Grid container>
                {comments.map((comment, index) => {
                    const { body, createdAt, userImage, userHandle } = comment;
                    return (
                        <Fragment key={createdAt}>
                            <Grid item sm={12}>
                                <Grid container>
                                    <Grid item sm={2}>
                                        <img src={userImage} alt="comment" className={classes.commentImage}/>
                                    </Grid>
                                    <Grid item sm={9}>
                                        <div className={classes.commentData}>
                                            <Typography 
                                                variant="h5"
                                                component={Link}
                                                to={`/user/${userHandle}`}
                                                color="primary"
                                            >
                                               
                                                {userHandle}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
                                            </Typography>
                                            <hr className={classes.invisLine} />
                                            <Typography 
                                                noWrap
                                                variant="body1"
                                            >
                                                {body}
                                            </Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/* Only show horizontal divider if it's not the last comment */}
                            {index !== comments.length - 1 && 
                                <hr className={classes.visibleSeparator}/>}
                        </Fragment>
                    )
                })}
            </Grid>
        )
    }
};

Comments.propTypes = {
    comments: PropTypes.array.isRequired
}

export default withStyles(styles)(Comments);