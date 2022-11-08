import ModeCommentIcon from '@mui/icons-material/ModeComment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import PollIcon from '@mui/icons-material/Poll';
import PieChartIcon from '@mui/icons-material/PieChart';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import EditIcon from '@mui/icons-material/Edit';
import ColorizeIcon from '@mui/icons-material/Colorize';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';



const link = [
    {
        title : 'Dashbord',
        Link : [
            {
                name :'ecommerce',
                icon : <ModeCommentIcon />
            },
        ],
    },
    {
        title : 'pages',
        Link : [
            {
                name :'orders',
                icon : <ShoppingCartIcon  />
            },
            {
                name :'employees',
                icon : <GroupIcon />
            },
            {
                name :'customers',
                icon : <PersonAddAlt1Icon  />
            },
        ],
    },
    {
        title : 'Apps',
        Link : [
            {
                name :'calendar',
                icon : <CalendarMonthIcon  />
            },
            {
                name :'kanban',
                icon : <ViewKanbanIcon  />
            },
            {
                name :'Editor',
                icon : <EditIcon  />
            },
            {
                name :'color-picker',
                icon : <ColorizeIcon />
            },
        ],
    },
    {
        title : 'charts',
        Link : [
            {
                name :'line',
                icon : <TrendingUpIcon  />
            },
            {
                name :'area',
                icon : <PollIcon />
            },
            {

                name :'bar',
                icon : <BarChartIcon  />
            },
            {

                name :'pie',
                icon : <PieChartIcon   />
            },
            {

                name :'Financial',
                icon : <CandlestickChartIcon />
            },
            {

                name :'color-Mapping',
                icon : <WaterfallChartIcon   />
            },
            {

                name :'pyramid',
                icon : <SignalCellularAltIcon   />
            },
            {

                name :'stacked',
                icon : <StackedLineChartIcon   />
            },
        ],
    },

] 




export default link