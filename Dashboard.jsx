import React, { useState } from 'react';
import { AlertCircle, Check, Edit, Plus, Trash2, User, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

// Types
type Permission = 'read' | 'write' | 'delete' | 'manage';
type Resource = 'users' | 'roles' | 'reports' | 'settings';

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: {
    [key in Resource]?: Permission[];
  };
}

interface User {
  id: string;
  name: string;
  email: string;
  active: boolean;
  roleId: string;
  lastLogin: string;
}

const INITIAL_ROLES: Role[] = [
  {
    id: '1',
    name: 'Admin',
    description: 'Full system access',
    permissions: {
      users: ['read', 'write', 'delete', 'manage'],
      roles: ['read', 'write', 'delete', 'manage'],
      reports: ['read', 'write', 'delete', 'manage'],
      settings: ['read', 'write', 'delete', 'manage'],
    },
  },
  {
    id: '2',
    name: 'Editor',
    description: 'Can edit content and manage users',
    permissions: {
      users: ['read', 'write'],
      roles: ['read'],
      reports: ['read', 'write'],
      settings: ['read'],
    },
  },
];

const INITIAL_USERS: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@vrvsecurity.com',
    active: true,
    roleId: '1',
    lastLogin: '2024-11-22T10:30:00',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@vrvsecurity.com',
    active: true,
    roleId: '2',
    lastLogin: '2024-11-23T09:15:00',
  },
];

const RBACDashboard = () => {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [roles, setRoles] = useState<Role[]>(INITIAL_ROLES);
  const [activeTab, setActiveTab] = useState<'users' | 'roles'>('users');

  const getPermissionColor = (permission: Permission) => {
    switch (permission) {
      case 'read': return 'bg-blue-100 text-blue-800';
      case 'write': return 'bg-green-100 text-green-800';
      case 'delete': return 'bg-red-100 text-red-800';
      case 'manage': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const UsersList = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Users</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>
                Create a new user and assign their role
              </DialogDescription>
            </DialogHeader>
            {/* Form would go here */}
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {users.map(user => (
          <Card key={user.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">{user.name}</h4>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={user.active}
                    onCheckedChange={() => {}}
                  />
                  <Button variant="ghost" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Badge variant="secondary">
                  {roles.find(r => r.id === user.roleId)?.name}
                </Badge>
                <span className="text-sm text-gray-500">
                  Last login: {new Date(user.lastLogin).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const RolesList = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Roles</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Role
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Role</DialogTitle>
              <DialogDescription>
                Define a new role and its permissions
              </DialogDescription>
            </DialogHeader>
            {/* Form would go here */}
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {roles.map(role => (
          <Card key={role.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">{role.name}</h4>
                    <p className="text-sm text-gray-500">{role.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {Object.entries(role.permissions).map(([resource, permissions]) => (
                  <div key={resource} className="flex items-center gap-2">
                    <span className="text-sm font-medium w-20">{resource}:</span>
                    <div className="flex gap-1 flex-wrap">
                      {permissions.map(permission => (
                        <Badge
                          key={permission}
                          variant="secondary"
                          className={getPermissionColor(permission)}
                        >
                          {permission}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Access Management</h1>
          <p className="text-gray-500 mt-2">
            Manage users, roles, and permissions for your organization
          </p>
        </div>

        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Activity Log</AlertTitle>
          <AlertDescription>
            2 new users added in the last 24 hours
          </AlertDescription>
        </Alert>

        <div className="flex gap-4 border-b">
          <Button
            variant={activeTab === 'users' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('users')}
            className="flex items-center gap-2"
          >
            <User className="w-4 h-4" /> Users
          </Button>
          <Button
            variant={activeTab === 'roles' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('roles')}
            className="flex items-center gap-2"
          >
            <Users className="w-4 h-4" /> Roles
          </Button>
        </div>

        <div className="min-h-[400px]">
          {activeTab === 'users' ? <UsersList /> : <RolesList />}
        </div>
      </div>
    </div>
  );
};

export default RBACDashboard;
