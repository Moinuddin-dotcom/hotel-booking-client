import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import meetingBg from '../../assets/images/meeting-events-top-baner.jpg'
import meetingCard1 from '../../assets/images/meeting-1.jpg'
import meetingCard2 from '../../assets/images/meeting-2.jpg..jpg'
import meetingCard3 from '../../assets/images/meeting-3.jpg'
import meetingCard4 from '../../assets/images/meeting-4.jpg'
import { Link } from 'react-router-dom'

// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios'
import toast from 'react-hot-toast'
import Loading from '../../Pages/Loading'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));


const MeetingEvents = () => {
  const [expanded, setExpanded] = React.useState(false);

  const [meetings, setMeetings] = useState([])
  const [loading, setLoading] = useState(true)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  const meetingsData = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/meetings`)
      setMeetings(data)
      // console.log(data)
    } catch (error) {
      toast.error('Data cant load at this moment', error)
    } finally {
      setLoading(false)
    }
  }



  useEffect(() => {
    meetingsData()
  }, []);

  return (
    <div>
      <Helmet>
        <title>MEETINGS | The Peninsula</title>
      </Helmet>
      <div
        className="hero my-10"
        style={{
          backgroundImage: `url(${meetingBg})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="py-10">
            <h1 className="mb-5 text-2xl md:lg:text-4xl lg:text-5xl font-bold">Rooms & Suites Gallery</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div className='text-center px-5 md:px-20 lg:px-56 pb-10'>
        <p>Celebrate occasions and events at the Ichamati Hall of Hotel Agrabad. Since 1970s, this Hall has witnessed many weddings, parties, and social events. Renowned musical artists of Bangladesh have performed here. Corporate events such as Gala Dinners of renowned Multi-National companies have all been our clients over many decades.</p>
      </div>
      <div className='max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-10'>
        {loading ? <Loading /> : <>
          {meetings.map(meetingsData =>
            <Card key={meetingsData._id} sx={{ maxWidth: 345 }}>
              <CardHeader
                title={meetingsData?.hallName}
              />
              <CardMedia
                component="img"
                height="194"
                image={meetingsData?.hallImage}
                // 
                alt="Ichamati Hall"
              />
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography sx={{ marginBottom: 2 }}>
                    {/* Ichamati Hall - Ideal to host large Meetings, Seminars, Conferences, Workshops, Wedding Ceremonies or other general parties. The hall is located in the ground floor with a clear view of the swimming pool. */}
                    {meetingsData?.hallDescription}

                  </Typography>

                </CardContent>
              </Collapse>
            </Card>
          )}
        </>}

      </div>
    </div>
  )
}

export default MeetingEvents
