import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';


const rows = [
    { thumbnail: 'src/assets/lion.jpg', name: 'Why wild animals are in trouble?', averageViewDuration: '2:25 (41.0%)', views: 3211 },
    { thumbnail: 'src/assets/water.jpg', name: 'Fires are mostly helping nature', averageViewDuration: '9:45 (30.5%)', views: 3102 },
    { thumbnail: 'src/assets/dolphin.jpg', name: 'Darkest parts of the ocean', averageViewDuration: '3:10 (25.5%)', views: 1900 },
    { thumbnail: 'src/assets/lion.jpg', name: 'Free all the birds campaign', averageViewDuration: '8:10 (15.5%)', views: 1201 },
    { thumbnail: 'src/assets/water.jpg', name: 'The freshest water you can ever have', averageViewDuration: '2:10 (34.1%)', views: 1195 },
    { thumbnail: 'src/assets/dolphin.jpg', name: 'How to take the best videos', averageViewDuration: '5:20 (14.1%)', views: 1037 },
];

function TopVideosList({ }) {
    return (
        <Box sx={styles.container}>
            <Typography variant="h6">
                Your top content in this period
            </Typography>
            <TableContainer sx={styles.tableContainer} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Content</TableCell>
                            <TableCell align="right">Average view duration</TableCell>
                            <TableCell align="right">Views</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                            >
                                <TableCell component="th" sx={styles.contentCell}>
                                    <Box sx={styles.videoThumbnail} component={'img'} src={row.thumbnail} />

                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.averageViewDuration}</TableCell>
                                <TableCell align="right">{row.views}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>);
}

export default TopVideosList;


/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    container: {
        mt: 4,
        width: '100%',
        textAlign: 'center'
    },
    tableContainer: {
        mt: 8
    },
    contentCell: {
        display: 'flex',
        alignItems: 'center'
    },
    videoThumbnail: {
        width: '100%',
        maxWidth: 100,
        marginRight: 1,
    },
}
