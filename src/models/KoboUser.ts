export interface KoboUser {
  id: string;
  username: string;
  roles: string[];
  organizations: KoboUserOrganization[];
}
export interface KoboUserResource {
  id: string;
  assets: {
    name: string;
  }[];
  organizations: KoboUserOrganization[];
}

export interface KoboUserOrganization {
  organizationId: string;
  name: string;
  color: string;
  profileId: string;
}

export interface KoboUserPost {
  id: string;
  roles: string[];
  organizations: string[];
}
