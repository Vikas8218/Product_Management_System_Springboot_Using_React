package com.vikas.product_management_system.service;

import java.util.List;

import com.vikas.product_management_system.model.Product;

public interface ProductService {
 
  public Product saveProduct(Product product);
  public List<Product> getAllproduct();
  public  Product getProductById(Integer id);
  public String deleteProduct(Integer id);
  public Product editProduct(Product product, Integer id);
}
