import { UserManagement } from './userManagement'

const admin = new UserManagement.Admin.AdminUser('Ava Geisler', 'ava.gais@web.com', true)
console.log(`Name: ${admin.name}`)
console.log(`Email: ${admin.email}`)
console.log(`Super Admin: ${admin.isSuperAdmin}`)

admin.toggleSuperAdminStatus()
console.log(`Super Admin after toggle: ${admin.isSuperAdmin}`)