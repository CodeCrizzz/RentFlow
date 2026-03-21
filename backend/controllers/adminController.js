const pool = require('../config/db');

const adminController = {
    getDashboard: async (req, res) => {
        try {
            // Aggregate data for dashboard
            const [totalTenants] = await pool.execute('SELECT COUNT(*) as count FROM users WHERE role = "tenant"');
            const [occupiedRooms] = await pool.execute('SELECT COUNT(*) as count FROM rooms WHERE status = "occupied"');
            const [pendingRequests] = await pool.execute('SELECT COUNT(*) as count FROM requests WHERE status = "pending"');

            res.json({
                totalTenants: totalTenants[0].count,
                occupiedRooms: occupiedRooms[0].count,
                pendingRequests: pendingRequests[0].count
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error fetching admin dashboard data' });
        }
    },

    getTenants: async (req, res) => {
        try {
            const [tenants] = await pool.execute('SELECT id, username, email FROM users WHERE role = "tenant"');
            res.json(tenants);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error fetching tenants' });
        }
    }
};

module.exports = adminController;
