export namespace UserManagement{
    export namespace Admin{
        export class AdminUser{ 
            constructor(
                public name: string,
                public email: string,
                public isSuperAdmin: boolean
        ) {}
        toggleSuperAdminStatus(): void {
            this.isSuperAdmin = !this.isSuperAdmin
        }
        }
    }
}