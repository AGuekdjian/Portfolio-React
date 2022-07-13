import './Menu.css';

export default function Menun() {
    return (
        <nav class="bg-dark d-flex align-items-center py-1 position-fixed w-100 top-0">
            <div class="container-fluid">
                <a class="navbar-brand my-name" href="index.html">
                    Anthony Guekdjian
                </a>
            </div>

            <ul class="list-style d-flex justify-content-end align-items-center m-1">
                <li class="nav-item me-4">
                    <a class="nav-link btn btn-outline-secondary rounded-pill px-4" aria-current="page"
                        href="index.html">Home</a>
                </li>
                <li class="nav-item me-4">
                    <a class="nav-link btn btn-outline-secondary rounded-pill px-4" href="#skill-title">Skill's</a>
                </li>
                <li class="nav-item me-4">
                    <a class="nav-link btn btn-outline-success rounded-pill px-4" href="#">Projects</a>
                </li>
            </ul>
            <div class="dropdown pe-5" id="btn-dropdown">
                <button class="btn btn-outline-danger dropdown-toggle rounded-pill fw-bold" type="button"
                    id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Settings
                </button>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <li><a class="dropdown-item" href="#">Light Mode</a></li>
                    <li><a class="dropdown-item" href="#">Dark Mode</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#">Report</a></li>
                </ul>
            </div>
        </nav>
    );
}