import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box'; // Import Box to wrap ImageList
import Typography from '@mui/material/Typography'; // Import Typography for the title

// Import local images
import whale1 from '../assets/gallery/gall1.jpg';
import whale2 from '../assets/gallery/gall2.jpg';
import whale3 from '../assets/gallery/gall3.jpg';
import whale4 from '../assets/gallery/gall4.jpg';
import whale5 from '../assets/gallery/gall5.jpg';
import whale6 from '../assets/gallery/gall6.jpg';
import whale7 from '../assets/gallery/gall7.jpg';
import whale8 from '../assets/gallery/gall8.jpg';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <div
    style={{
    //     position: 'absolute', 
    //     left: '50%', 
    //     top: '50%',
    //     transform: 'translate(-50%, -50%)'
    }}
>
<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',    // Stack items vertically
        justifyContent: 'flex-start', // Start from the top
        alignItems: 'center',
        minHeight: '90vh',           // Full screen height
        overflow: 'hidden',
        textAlign: 'center',         // Center the text
        marginTop: '64px',           // Push content down to account for AppBar height (64px is default height for AppBar in MUI)
        
      }}
    >

      {/* Title */}
      <Typography variant="h6" gutterBottom
      sx={{
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '4%',
        fontFamily: 'Lato, sans-serif',
        color: '#00557f',
        fontStyle: 'italic'
      }}>
      Get ready to snap breathtaking shots as you set sail on a whale watching adventure like no other! Imagine the thrill of capturing these magnificent creatures in their natural habitat — from powerful breaches to graceful tail slaps.
        </Typography>

      {/* ImageList */}
      <ImageList
        sx={{
          width: '80%',            // Adjust width as needed
          height: 'auto',
        }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </div>
  );
}
const itemData = [
  {
    img: whale1,
    title: 'Breach1',
    rows: 2,
    cols: 2,
  },
  {
    img: whale2,
    title: 'Tail1',
  },
  {
    img: whale3,
    title: 'Flip1',
  },
  {
    img: whale4,
    title: 'Orca1',
    cols: 2,
  },
  {
    img: whale5,
    title: 'Flip2',
    cols: 2,
  },
  {
    img: whale6,
    title: 'Orca2',
    rows: 2,
    cols: 2,
  },
  {
    img: whale7,
    title: 'Tail2',
  },
  {
    img: whale8,
    title: 'Breach2',
  },
];
