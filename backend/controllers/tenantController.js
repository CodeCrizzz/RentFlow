const pool = require('../config/db');

const tenantController = {
    getDashboard: async (req, res) => {
        try {
            const tenantId = req.user.id;
            // Fetch tenant dashboard data
            const [tenantInfo] = await pool.execute('SELECT username, email FROM users WHERE id = ?', [tenantId]);
            const [recentPayments] = await pool.execute('SELECT * FROM payments WHERE tenant_id = ? ORDER BY date DESC LIMIT 5', [tenantId]);
            const [pendingRequests] = await pool.execute('SELECT COUNT(*) as count FROM requests WHERE tenant_id = ? AND status = "pending"', [tenantId]);

            res.json({
                user: tenantInfo[0],
                recentPayments,
                pendingRequests: pendingRequests[0].count
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error fetching tenant dashboard data' });
        }
    },

    getProfile: async (req, res) => {
        try {
            const tenantId = req.user.id;
            const [profile] = await pool.execute('SELECT username, email, role FROM users WHERE id = ?', [tenantId]);
            res.json(profile[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error fetching profile' });
        }
    }
};

module.exports = tenantController;
