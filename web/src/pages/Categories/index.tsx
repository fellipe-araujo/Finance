import { useEffect, useState } from "react";
import { Container, List } from "./styles";
import { Link } from "react-router-dom";
import PrimaryHeader from "../../components/PrimaryHeader";
import ArtifactData from "../../components/ArtifactData";
import CategoryCard from "../../components/CategoryCard";
import { useAuth } from "../../context/auth";
import { UserCategory } from "../../utils/types";
import categoryService from "../../services/categoryService";

const Categories = () => {
  const [categories, setCategories] = useState<UserCategory[]>([]);

  const { user } = useAuth();

  useEffect(() => {
    const fetchAllCategories = async () => {
      const response = await categoryService.categoryAll(user?._id!);

      setCategories(response.reverse());
    };

    fetchAllCategories();
  }, [user?._id]);

  return (
    <Container>
      <PrimaryHeader title="Categorias" goTo="/categories/create" />

      <ArtifactData
        title="Categorias"
        subTitle="Totais"
        value={categories.length.toString()}
        artifactType="Categorias"
      />

      <List>
        {categories.map((category) => (
          <Link
            key={category._id}
            className="categories-link"
            to={`categories/${category._id}`}
          >
            <CategoryCard name={category.name!} color={category.color!} />
          </Link>
        ))}
      </List>
    </Container>
  );
};

export default Categories;
