const HOST = import.meta.env.VITE_HOST;

export const changePassword = async (currentPassword, newPassword) => {
  try {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${HOST}/api/admin/change-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        currentPassword,
        newPassword
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to change password');
    }

    return {
      success: true,
      message: data.message || 'Password changed successfully'
    };
  } catch (error) {
    console.error('Password change error:', error);
    return {
      success: false,
      message: error.message || 'Failed to change password'
    };
  }
}; 