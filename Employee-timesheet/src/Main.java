import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;


enum Role
{
    ADMIN,
    MANAGER,
    EMPLOYEE,
    DEFAULT
}

public class Main {

    private  static Scanner scanner = new Scanner(System.in);
    private static Statement statement;
    private static Connection conn;

    public static void main(String[] args) {
        System.out.println();
        System.out.println();
        System.out.println("Welcome to Employee TimeSheet Application");
        System.out.println();
       _show_userMenu();
    }



    private static void _Main() {
        _connDB();
        System.out.print("Select you position : ");
        int choice = scanner.nextInt();
        Role role = Role.DEFAULT;
        if(choice==1)
        {
            role=Role.ADMIN;
        }
        else if (choice==2)
        {
            role=Role.MANAGER;
        }
        else  if (choice==3)
        {
            role=Role.EMPLOYEE;
        }
        else
        {
            role=Role.DEFAULT;
        }
        switch (role)
        {
            case ADMIN:
                // ADMIN
                Admin admin = new Admin();


                admin.setStatement(statement);
                admin.setAdmin_interface(new Admin.Admin_interface() {
                    @Override
                    public void _Logout_main() {
                        _show_userMenu();
                    }
                });
                admin._showMenu("main");



                break;
            case MANAGER:
                // MANAGER
                Manager manager = new Manager();

                manager.setStatement(statement);
                manager.setManager_interface(new Manager.Manager_interface() {
                    @Override
                    public void logout() {
                        _show_userMenu();
                    }
                });

                manager._Login();
                break;
            case EMPLOYEE:
                // EMPLOYEE
                Employee employee = new Employee();
                employee.setStatement(statement);
                employee.setEmployee_interface(new Employee.Employee_interface() {
                    @Override
                    public void logout() {
                        _show_userMenu();
                    }
                });
                employee._show_EmpMenu("main");

                break;
            default:
                System.out.println("Enter valid details...");
                System.out.println();
                _Main();

        }


    }



    private static void _connDB() {
        String
                DB_URL = "jdbc:mysql://localhost:3307/empdb";

        try {
            conn = DriverManager.getConnection(DB_URL, "root", "aswin123");
            statement = conn.createStatement();
        } catch (SQLException e) {
            System.out.println(e);
        }
    }



    private static void _show_userMenu() {

        System.out.println("======================================================");
        System.out.println("\t\t\t Choose User");
        System.out.println("1.Admin");
        System.out.println("2.Manager");
        System.out.println("3.Employee");
        System.out.println("======================================================");
        System.out.println();
        _Main();

    }


}