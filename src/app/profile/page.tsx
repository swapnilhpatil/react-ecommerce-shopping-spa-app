import Header from "../../components/Header";
import Footer from "../../components/Footer";
import type { CSSProperties } from 'react';

export default function Profile() {
  return (
    <main>
      <Header />
      
      <div className="container" style={{ padding: 'var(--space-2xl) 0' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-2xl)', fontWeight: 800 }}>Account Dashboard</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: 'var(--space-2xl)' }}>
          {/* Sidebar Nav */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <button style={sidebarBtnActive}>My Profile</button>
            <button style={sidebarBtn}>Order History</button>
            <button style={sidebarBtn}>Wishlist</button>
            <button style={sidebarBtn}>Saved Addresses</button>
            <button style={sidebarBtn}>Settings</button>
            <button style={{ ...sidebarBtn, color: 'var(--status-error)' } as CSSProperties}>Logout</button>
          </nav>

          {/* Profile Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-lg)' }}>Personal Information</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)' }}>
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <p style={valueStyle}>John Doe</p>
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <p style={valueStyle}>john.doe@example.com</p>
                </div>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <p style={valueStyle}>+1 (555) 000-1234</p>
                </div>
                <div>
                  <label style={labelStyle}>Member Since</label>
                  <p style={valueStyle}>January 2026</p>
                </div>
              </div>
              <button style={{ marginTop: 'var(--space-xl)', color: 'var(--primary)', fontWeight: 600 }}>Edit Profile</button>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-lg)' }}>Recent Orders</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--outline-variant)' } as CSSProperties}>
                    <th style={{ padding: '1rem 0' }}>Order ID</th>
                    <th style={{ padding: '1rem 0' }}>Date</th>
                    <th style={{ padding: '1rem 0' }}>Status</th>
                    <th style={{ padding: '1rem 0' }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--outline-variant)' } as CSSProperties}>
                    <td style={{ padding: '1rem 0' }}>#ORD-7721</td>
                    <td style={{ padding: '1rem 0' }}>Apr 20, 2026</td>
                    <td style={{ padding: '1rem 0' }}><span style={badgeSuccess}>Delivered</span></td>
                    <td style={{ padding: '1rem 0' }}>$165.00</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--outline-variant)' } as CSSProperties}>
                    <td style={{ padding: '1rem 0' }}>#ORD-6540</td>
                    <td style={{ padding: '1rem 0' }}>Mar 12, 2026</td>
                    <td style={{ padding: '1rem 0' }}><span style={badgeSuccess}>Delivered</span></td>
                    <td style={{ padding: '1rem 0' }}>$85.00</td>
                  </tr>
                </tbody>
              </table>
              <button style={{ marginTop: 'var(--space-lg)', color: 'var(--primary)', fontWeight: 600 }}>View All Orders</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

const sidebarBtn: CSSProperties = {
  textAlign: 'left',
  padding: '1rem 1.5rem',
  borderRadius: 'var(--radius-md)',
  fontWeight: 500,
  transition: 'background 0.2s',
  color: 'var(--text-body)'
};

const sidebarBtnActive: CSSProperties = {
  ...sidebarBtn,
  background: 'var(--primary)',
  color: 'white',
  fontWeight: 600
};

const labelStyle: CSSProperties = {
  display: 'block',
  fontSize: '0.875rem',
  color: 'var(--outline)',
  marginBottom: '0.25rem'
};

const valueStyle: CSSProperties = {
  fontSize: '1.125rem',
  fontWeight: 500,
  color: 'var(--text-heading)'
};

const badgeSuccess: CSSProperties = {
  background: '#ecfdf5',
  color: '#065f46',
  padding: '0.25rem 0.75rem',
  borderRadius: 'var(--radius-full)',
  fontSize: '0.75rem',
  fontWeight: 600
};
