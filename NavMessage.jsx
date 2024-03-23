import React from 'react'

function NavMessage() {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-success badge-number">3</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 3 New notifications
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i className="bi bi-x-circle text-danger"></i>
          <div>
            <h4>Victor Ipsum</h4>

            <p>Loren Ipsom gcghkjhvhkcgjchkglk</p>

            <p>1 hr. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i className="bi bi-check-circle text-warning"></i>
          <div>
            <h4>Lucia sum</h4>
            <p>Loren Ipsom gcghkjhvhkcgjchkglk</p>

            <p>2 hr. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i className="bi bi-check2-circle text-info"></i>
          <div>
            <h4>Lisan Al Gaib</h4>
            <p>Loren Ipsom gcghkjhvhkngjchkglk</p>

            <p>3 hr. 10 min. ago</p>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default NavMessage