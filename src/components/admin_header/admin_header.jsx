import newsIcon from '../../images/newspaper-solid.png'
import pageIcon from '../../images/file-lines-solid.png'
import announcementIcon  from '../../images/scroll-solid.png'
import uploadIcon from '../../images/photo-film-solid.png'
import photoIcon from '../../images/image-solid.png'
import videoIcon from '../../images/film-solid.png'
import fileIcon from '../../images/file-solid.png'
import chartIcon from '../../images/chart-line-solid.png'
import './admin_header.css'

function AdminHeader() {
    return (
        <>
            <div id="wrapper">
                <div class="topbar">
                    <div class="topbar-left">
                        <a href="/" class="logo">
                            <span class="logo-light">
                                <h1>TKTI</h1>
                            </span>
                            <span class="logo-sm">
                                <i class="fa-solid fa-newspaper"></i>
                            </span>
                        </a>
                    </div>    
                </div>
                <div class="left side-menu">
                    <div class="slimscroll-menu" id="remove-scroll">
                        <div id="sidebar-menu">
                            <ul class="metismenu" id="side-menu">
                            <li class="menu-title">Menu</li>
                                <li>
                                    <a href="/admin/yangilik" class="waves-effect">
                                        <i
                                        class="mdi  mdi-message-text-outline text-white bg-warning"><img src={newsIcon} alt="" width={18} /></i>
                                        <span> Yangilik </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/page" class="waves-effect">
                                        <i
                                        class="mdi  mdi-message-text-outline text-white bg-warning"><img src={pageIcon} alt="" width={15} /></i>
                                        <span> Sahifa </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/announcement" class="waves-effect">
                                        <i
                                        class="mdi  mdi-message-text-outline text-white bg-warning"><img src={announcementIcon} alt="" width={18} /></i>
                                        <span> Elon </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/upload" class="download_efect">
                                        <i 
                                        class="mdi  mdi-settings text-white bg-danger"><img src={uploadIcon} alt="" width={18} /></i>
                                        <span>Media fayl yuklash</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/photo" class="download_efect">
                                        <i
                                        class="mdi  mdi-settings text-white bg-danger"><img src={uploadIcon} alt="" width={18} /></i>
                                        <span>Media resurslar</span>
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="/admin/videos" class="download_efect">
                                        <i
                                        class="mdi  mdi-settings text-white bg-danger"><img src={videoIcon} alt="" width={18} /></i>
                                        <span>Videolar</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/files" class="download_efect">
                                        <i
                                        class="mdi  mdi-settings text-white bg-danger"><img src={fileIcon} alt="" width={15} /></i>
                                        <span>Fayllar</span>
                                    </a>
                                </li> */}
                                <li>
                                    <a href="/admin/statistic/all" class="waves-effect">
                                        <i
                                        class="mdi mdi-trending-up bg-success text-white"><img src={chartIcon} alt="" width={18} /></i>
                                        <span> Statistika </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminHeader;
