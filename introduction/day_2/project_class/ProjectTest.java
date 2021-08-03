import java.util.Arrays;
import java.util.ArrayList;

public class ProjectTest{
    public static void main(String[] args){
        Project project1 = new Project("First Project", "This is a description", 10.0);
        
        System.out.println(project1.getName());
        project1.setName("Changed Name");
        System.out.println(project1.getName());

        System.out.println(project1.getDescription());
        project1.setDescription("Changed description");
        System.out.println(project1.getDescription());

        System.out.println(project1.elevatorPitch());

        System.out.println("----------------------------------------------");
        Project empty_project = new Project();

        System.out.println(empty_project.getName());
        empty_project.setName("Changed Name");
        System.out.println(empty_project.getName());

        System.out.println(empty_project.getDescription());
        empty_project.setDescription("Changed description");
        System.out.println(empty_project.getDescription());

        System.out.println(empty_project.elevatorPitch());

        System.out.println("----------------------------------------------");
        Project name_only = new Project("Only a name");

        System.out.println(name_only.getName());
        name_only.setName("Changed Name");
        System.out.println(name_only.getName());

        System.out.println(name_only.getDescription());
        name_only.setDescription("Changed description");
        System.out.println(name_only.getDescription());

        name_only.setInitialCost(15.0);

        System.out.println(name_only.elevatorPitch());

        System.out.println("----------------------------------------------");
        Portfolio project_list = new Portfolio();
        project_list.addProject(project1);
        project_list.addProject(empty_project);
        project_list.addProject(name_only);

        System.out.println(project_list.getPortfolioCost());
        project_list.showPortfolio();

    }
}