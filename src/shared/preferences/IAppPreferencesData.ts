/**
 * Contains state of all non-config settings the user can change in the application.
 * This is the data contained in the Prefererences file.
 */
export interface IAppPreferencesData {
  /** Scale of the games at the BrowsePage */
  browsePageGameScale: number;
  /** If "Extreme" games should be shown at the BrowsePage */
  browsePageShowExtreme: boolean;
}